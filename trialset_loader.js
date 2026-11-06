// Validated data loader for the preloaded ./data/experiment_data.js.
// No fetch() and no local HTTP server required; works with file:// and web hosting.
(function(global) {
"use strict";

function requiredNumber(value, context) {
  if (value === "" || value === undefined || value === null) throw Error("Missing " + context);
  const n = Number(value);
  if (!Number.isFinite(n)) throw Error("Invalid number for " + context);
  return n;
}
function checkBinary(value, context) {
  const v = requiredNumber(value, context);
  if (v !== 0 && v !== 1) throw Error("Expected Yes/No (0/1) for " + context);
  return v;
}
function checkClose(actual, stated, context) {
  if (Math.abs(actual-stated) > 1e-9) {
    throw Error("Statistics mismatch in " + context + ": derived " + actual + ", supplied " + stated);
  }
}
function makePractice(main, n, shuffle){
  if(n===0)return [];
  const cityMap=new Map(), existingPairs=new Set();
  const pairKey=(a,b)=>[a,b].sort().join("::");
  function insert(name,pop,cues){
    if(!cityMap.has(name)){cityMap.set(name,{name,pop,cues});return;}
    const old=cityMap.get(name);
    if(old.pop!==pop||old.cues.some((v,i)=>v!==cues[i]))throw Error("Inconsistent city attributes across trials: "+name);
  }
  for(const t of main){
    existingPairs.add(pairKey(t.left_city,t.right_city));
    insert(t.left_city,t.left_population,t.left_cues);
    insert(t.right_city,t.right_population,t.right_cues);
  }
  const cityList=shuffle(Array.from(cityMap.values())); const used=new Set(),selected=[];
  for(let i=0;i<cityList.length && selected.length<n;i++){
    const a=cityList[i];if(used.has(a.name))continue;
    for(let j=i+1;j<cityList.length;j++){
      const b=cityList[j];
      if(used.has(b.name)||a.pop===b.pop||existingPairs.has(pairKey(a.name,b.name)))continue;
      const swap=selected.length%2===1;const left=swap?b:a;const right=swap?a:b;
      selected.push({trial_id:"practice_"+(selected.length+1),pair_index:null,left_city:left.name,right_city:right.name,left_population:left.pop,right_population:right.pop,correct_side:left.pop>right.pop?"left":"right",left_cues:left.cues.slice(),right_cues:right.cues.slice()});
      used.add(a.name);used.add(b.name);break;
    }
  }
  if(selected.length!==n)throw Error("Not enough distinct practice city pairs absent from main dataset");
  return selected;
}

function loadTrialsetFromJavaScript(shuffle, practiceCount) {
  const raw = global.GECITY_TRIALSET;
  if (!raw) throw Error("Missing data/experiment_data.js. Run make_trials.py and copy its experiment_data.js to the v1/data folder.");
  if (raw.schema_version !== 1) throw Error("Unsupported experiment_data.js format (schema_version must be 1).");
  if (!Array.isArray(raw.features) || raw.features.length !== 5) throw Error("This experiment requires five features.");
  if (!Array.isArray(raw.trials) || raw.trials.length === 0) throw Error("experiment_data.js contains no trials.");
  if (!Number.isInteger(raw.trial_count) || raw.trial_count !== raw.trials.length) throw Error("Trial count does not match experiment_data.js.");
  const ids = new Set();
  const features = raw.features.map((f,i) => {
    if (!f || typeof f.id !== "string" || !f.id || typeof f.label !== "string" || !f.label || ids.has(f.id))
      throw Error("Invalid/duplicate feature at index " + i);
    ids.add(f.id);
    const targetD = requiredNumber(f.target_discrimination, f.label+" target discrimination");
    const targetV = requiredNumber(f.target_validity, f.label+" target validity");
    const actualD = requiredNumber(f.actual_discrimination, f.label+" actual discrimination");
    const actualV = requiredNumber(f.actual_validity, f.label+" actual validity");
    if ([targetD,targetV,actualD,actualV].some(v=>v<0||v>1)) throw Error("Cue probabilities must be within [0,1]: "+f.label);
    if(typeof f.positive !== "boolean")throw Error("Missing cue direction for "+f.label);
    return {
      id:f.id, label:f.label, positive:f.positive,
      target_discrimination:targetD, target_validity:targetV,
      actual_discrimination:actualD, actual_validity:actualV,
      discriminating_trials:requiredNumber(f.discriminating_trials,f.label+" discriminating trials"),
      correct_when_discriminating:requiredNumber(f.correct_when_discriminating,f.label+" valid trials")
    };
  });
  const seenIds=new Set(),pairs=new Set();
  const trials=raw.trials.map((t,i)=>{
    const id=requiredNumber(t.trial_id,"trial_id "+i);
    if(seenIds.has(id))throw Error("Duplicate trial ID "+id);seenIds.add(id);
    const left=String(t.left_city||""),right=String(t.right_city||"");
    if(!left||!right||left===right)throw Error("Invalid cities at trial "+id);
    const key=[left,right].sort().join("::");
    if(pairs.has(key))throw Error("Repeated city pair at trial "+id);pairs.add(key);
    const lp=requiredNumber(t.left_population,"left population "+id),rp=requiredNumber(t.right_population,"right population "+id);
    if(lp===rp)throw Error("Population tie at trial "+id);
    const correct=lp>rp?"left":"right";
    if(t.correct_side!==correct)throw Error("Correct side disagrees with populations at trial "+id);
    if(!Array.isArray(t.left_cues)||!Array.isArray(t.right_cues)||
       t.left_cues.length!==features.length||t.right_cues.length!==features.length)
      throw Error("Feature count mismatch at trial "+id);
    const lc=t.left_cues.map((v,j)=>checkBinary(v,id+" left "+features[j].id));
    const rc=t.right_cues.map((v,j)=>checkBinary(v,id+" right "+features[j].id));
    return {
      trial_id:id, pair_index:t.pair_index==null?null:requiredNumber(t.pair_index,"pair_index "+id),
      left_city:left,right_city:right,left_population:lp,right_population:rp,correct_side:correct,
      left_cues:lc,right_cues:rc
    };
  });
  for (let j=0;j<features.length;j++) {
    let disc=0,valid=0;
    const f=features[j];
    for(const t of trials) {
      if(t.left_cues[j]===t.right_cues[j])continue;
      disc++;
      const correctValue=t.correct_side==="left"?t.left_cues[j]:t.right_cues[j];
      if((f.positive&&correctValue===1)||(!f.positive&&correctValue===0))valid++;
    }
    if(!disc)throw Error("Validity undefined with no discriminating trials for "+f.label);
    if(disc!==f.discriminating_trials||valid!==f.correct_when_discriminating)
      throw Error("Cue counts disagree with trials for "+f.label);
    checkClose(disc/trials.length,f.actual_discrimination,f.label+" discrimination");
    checkClose(valid/disc,f.actual_validity,f.label+" validity");
  }
  const practice=makePractice(trials,practiceCount,shuffle);
  return {
    features, trials, practice,
    trialset_name:typeof raw.trialset_name==="string"?raw.trialset_name:"unknown",
    source_file:"data/experiment_data.js",
    trial_count:trials.length
  };
}
global.loadTrialsetFromJavaScript=loadTrialsetFromJavaScript;
})(window);
