var citysearch = (function (jspsych) {
    "use strict";

    const info = {
        name: "city-search",
        parameters: {
            features_a: {
                type: jspsych.ParameterType.INT,
                array: true,
                default: undefined,
            },
            features_b: {
                type: jspsych.ParameterType.INT,
                array: true,
                default: undefined,
            },
            feature_labels: {
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_ids: {
                // Stable attribute IDs, ordered by the randomized on-screen rows (top to bottom).
                // These are not the row position IDs or the 1-10 city-cell IDs.
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_positive: {
                type: jspsych.ParameterType.BOOL,
                array: true,
                default: undefined,
            },
            show_dv_dots: {type: jspsych.ParameterType.BOOL,default:false},
            discrimination_levels: {type: jspsych.ParameterType.INT,array:true,default:[]},
            validity_levels: {type: jspsych.ParameterType.INT,array:true,default:[]},
            dv_color_mapping: {type: jspsych.ParameterType.OBJECT,default:null},
            correct_key: {
                type: jspsych.ParameterType.KEY,
                default: "a",
            },
            choices: {
                type: jspsych.ParameterType.KEYS,
                default: ["a", "b", "d", "ArrowLeft", "ArrowRight"],
            },
            is_practice: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
            trial_index: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            city_a_name: {
                type: jspsych.ParameterType.STRING,
                default: "",
            },
            city_b_name: {
                type: jspsych.ParameterType.STRING,
                default: "",
            },
            city_a_pop: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            city_b_pop: {
                type: jspsych.ParameterType.INT,
                default: 0,
            },
            reward_points: {type: jspsych.ParameterType.FLOAT, default: 10},
            click_cost_points: {type: jspsych.ParameterType.FLOAT, default: 1},
            free_reveals: {type: jspsych.ParameterType.INT, default: 1},
            immediate_finish: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
        },
    };

    class CitySearchPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const N = trial.feature_labels.length;
            const layout = computeArcLayout(N);
            const { cx, cityAX, cityBX, cityLabelY, rows } = layout;
            const CELL = layout.cell;
            const LABEL_W = layout.labelW;
            // Five ranks in perceptually balanced OKLCH blue/orange palettes (matching L and C at each rank).
            const shades={
                blue:["#C0DAFC","#8DB7ED","#5D94DA","#3772BB","#23538E"],
                orange:["#F6CEB7","#E3A47F","#CB7B48","#AB5819","#803D05"]
            };
            if(trial.show_dv_dots){
                const validLevels=x=>Array.isArray(x)&&x.length===N&&
                   x.every(level=>Number.isInteger(level)&&level>=1&&level<=5);
                if(!validLevels(trial.discrimination_levels)||!validLevels(trial.validity_levels))
                    throw new Error("D/V dot levels must be 1..5 for every row");
                const mapping=trial.dv_color_mapping;
                if(!mapping || !shades[mapping.discrimination] ||
                   !shades[mapping.validity] || mapping.discrimination===mapping.validity)
                    throw new Error("Invalid D/V color mapping");
            }

            let response = { rt: null, key: null };
            const eventTimeline = [];
            const trialStart = performance.now();
            const trialStartedAtUtc = new Date().toISOString();
            let lastViewedCell = 0;
            let responseAtMs = null;
            let responseAtUtc = null;
            const clickEvents = [];
            const revealEvents = [];
            const revealedCells = new Set();
            const cellClickCounts = {};
            let informationCostPoints = 0;
            function roundPoints(n) { return Number(n.toFixed(6)); }
            function pointText(n) { return String(roundPoints(n)); }

            const viewCounts = {};
            const dwellTimes = {};
            for (let i = 1; i <= 10; i++) {
                viewCounts[i] = 0;
                dwellTimes[i] = 0;
            }

            let firstCell = null;
            let lastCellBeforeResponse = 0;

            // position_id = 1..N (top to bottom); cell_id = 1..2N (city + row).
            // feature_id is the stable semantic attribute ID, independent of display position.
            function cellId(citySide, featIdx) {
                return citySide === "A" ? featIdx + 1 : featIdx + N + 1;
            }

            function cellDetails(code) {
                const featureIndex = (code - 1) % N;
                const city = code <= N ? "A" : "B";
                const value = city === "A" ? trial.features_a[featureIndex] : trial.features_b[featureIndex];
                return {
                    cell_id: code,
                    city: city,
                    position_id: featureIndex + 1,
                    feature_position: featureIndex + 1,
                    feature_id: trial.feature_ids[featureIndex],
                    feature_label: trial.feature_labels[featureIndex],
                    value: value,
                    value_label: value === 1 ? "Yes" : "No",
                };
            }

            function keyToCity(key) {
                const normalized = String(key ?? "").toLowerCase();
                if (normalized === "a" || normalized === "arrowleft") return "A";
                if (normalized === "b" || normalized === "d" || normalized === "arrowright") return "B";
                return null;
            }

            function lastViewSupports(choiceKey) {
                if (lastCellBeforeResponse === 0) return null;
                const fi = (lastCellBeforeResponse - 1) % 5;
                const side = lastCellBeforeResponse <= 5 ? "A" : "B";
                const val = side === "A" ? trial.features_a[fi] : trial.features_b[fi];
                const positive = trial.feature_positive[fi];
                const otherSide = side === "A" ? "B" : "A";
                const otherVal = side === "A" ? trial.features_b[fi] : trial.features_a[fi];
                if (val === otherVal) return null;
                let pointsTo;
                if (positive) {
                    pointsTo = val === 1 ? side : otherSide;
                } else {
                    pointsTo = val === 1 ? otherSide : side;
                }
                const chosen = keyToCity(choiceKey);
                return pointsTo === chosen;
            }

            let html = `
<style>
  #cs-root { position: fixed; inset: 0; font-family: Arial, sans-serif; user-select: none; }
  #cs-city-a, #cs-city-b { position: fixed; font-size: 20px; font-weight: bold; transform: translate(-50%, -50%); }
  .cs-cell {
    position: fixed; width: ${CELL}px; height: ${CELL}px;
    border: 2px solid #333; border-radius: 10px;
    background: #f5f5f5; display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: bold; color: #222; cursor: pointer;
  }
  .cs-cell.cs-revealed {background:#e9f1fa;border-color:#557a9f;cursor:default;}
  #cs-cost {position:fixed;left:50%;top:${cityLabelY - 43}px;
            transform:translate(-50%,-50%);white-space:nowrap;
            text-align:center;font-size:20px;color:#333;pointer-events:none;}
  #cs-cost-value {font-size:20px;color:#a12323;}
  .cs-label {
    position: fixed; width: ${LABEL_W}px; text-align: center;
    font-size: 15px; font-weight: 600; color: #333;
    transform: translate(-50%, -50%);
  }
  .cs-label-dv {line-height:1.15;pointer-events:none;}
  .cs-dv-row {display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;margin-top:4px;}
  .cs-dv-key {display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:14px;font:700 11px Arial,sans-serif;}
  .cs-dv-dot {display:inline-block;width:16px;height:16px;flex:0 0 16px;border-radius:50%;
              border:1px solid rgba(0,0,0,.24);box-sizing:border-box;}
  .cs-dv-legend {position:fixed;left:50%;top:15px;transform:translateX(-50%);
                 white-space:nowrap;font:13px Arial,sans-serif;color:#444;
                 text-align:center;pointer-events:none;}
</style>
<div id="cs-root">
  <div id="cs-city-a" style="left:${cityAX}px; top:${cityLabelY}px;">City A</div>
  <div id="cs-city-b" style="left:${cityBX}px; top:${cityLabelY}px;">City B</div>
`;

            // The legend follows the participant's one-time D/V color assignment.
            if(trial.show_dv_dots){
                const mapping=trial.dv_color_mapping;
                html+='<div class="cs-dv-legend">'+
                      '<b style="color:'+shades[mapping.discrimination][4]+'">D</b> ('+
                      mapping.discrimination+') = Discrimination &nbsp; · &nbsp; '+
                      '<b style="color:'+shades[mapping.validity][4]+'">V</b> ('+
                      mapping.validity+') = Validity &nbsp; · &nbsp; Darker = Higher</div>';
            }

            const cells = [];

            for (const row of rows) {
                const { fi, y, leftX, rightX } = row;
                const label = trial.feature_labels[fi];

                const idA = `cs-a-${fi}`;
                const idB = `cs-b-${fi}`;
                const dLevel=trial.show_dv_dots?trial.discrimination_levels[fi]:null;
                const vLevel=trial.show_dv_dots?trial.validity_levels[fi]:null;
                const cueLabel=trial.show_dv_dots
                    ? label+'<div class="cs-dv-row">'+
                        '<span class="cs-dv-key" title="D (Discrimination): level '+dLevel+' of 5">'+
                        '<span class="cs-dv-dot" style="background:'+
                          shades[trial.dv_color_mapping.discrimination][dLevel-1]+'"></span>D</span>'+
                        '<span class="cs-dv-key" title="V (Validity): level '+vLevel+' of 5">'+
                        '<span class="cs-dv-dot" style="background:'+
                          shades[trial.dv_color_mapping.validity][vLevel-1]+'"></span>V</span></div>'
                    : label;

                html += `<div class="cs-cell" id="${idA}" style="left:${leftX}px; top:${y - CELL / 2}px;">?</div>`;
                html += `<div class="cs-label${trial.show_dv_dots?" cs-label-dv":""}" style="left:${cx}px; top:${y}px;">${cueLabel}</div>`;
                html += `<div class="cs-cell" id="${idB}" style="left:${rightX}px; top:${y - CELL / 2}px;">?</div>`;

                cells.push({ idA, idB, fi });
            }

            html += '<div id="cs-cost">Cost: <strong id="cs-cost-value">-0</strong></div></div>';
            display_element.innerHTML = html;
            const costEl = display_element.querySelector("#cs-cost-value");

            function onCellClick(event, el, cellIdValue) {
                if (response.key !== null || event.button !== 0) return;
                const now=performance.now(), detail=cellDetails(cellIdValue);
                const repeat=revealedCells.has(cellIdValue);
                const revealOrder=repeat?null:revealEvents.length+1;
                const free=!repeat && revealOrder<=trial.free_reveals;
                const charge=repeat||free?0:trial.click_cost_points;
                informationCostPoints=roundPoints(informationCostPoints+charge);
                const record={
                    order:clickEvents.length+1,...detail,
                    time_ms:now-trialStart,timestamp_utc:new Date().toISOString(),
                    mouse_button:event.button,client_x:event.clientX,client_y:event.clientY,
                    is_repeat_click:repeat,reveal_order:revealOrder,is_free_reveal:free,
                    click_cost_points:roundPoints(charge),
                    cumulative_cost_points:informationCostPoints
                };
                clickEvents.push(record);
                cellClickCounts[cellIdValue]=(cellClickCounts[cellIdValue]||0)+1;
                eventTimeline.push({
                    cell:cellIdValue,cell_id:cellIdValue,city:detail.city,
                    position_id:detail.position_id,feature_id:detail.feature_id,
                    time_ms:record.time_ms,event:repeat?"repeat_click":"reveal_click",
                    click_order:record.order,reveal_order:revealOrder,
                    cost_points:record.click_cost_points
                });
                if(repeat)return;
                revealedCells.add(cellIdValue);
                revealEvents.push(record);
                el.textContent=detail.value_label;
                el.classList.add("cs-revealed");
                if(firstCell===null)firstCell=cellIdValue;
                lastViewedCell=cellIdValue;
                viewCounts[cellIdValue]++;
                costEl.textContent="-"+pointText(informationCostPoints);
            }
            cells.forEach(({idA,idB,fi})=>{
                const elA=display_element.querySelector("#"+idA);
                const elB=display_element.querySelector("#"+idB);
                elA.addEventListener("click",event=>onCellClick(event,elA,cellId("A",fi)));
                elB.addEventListener("click",event=>onCellClick(event,elB,cellId("B",fi)));
            });

            const keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: "performance",
                persist: false,
                allow_held_key: false,
            });

            const self = this;

            function after_response(info) {
                if (response.key !== null) return;
                const now = performance.now();
                response = info;
                responseAtMs = now - trialStart;
                responseAtUtc = new Date().toISOString();

                lastCellBeforeResponse = lastViewedCell;

                // Append the final decision to the click-based event timeline.
                eventTimeline.push({
                    cell: 0,
                    time_ms: responseAtMs,
                    event: "response",
                    key: info.key,
                    choice_city: keyToCity(info.key),
                    rt_ms: info.rt,
                });

                const choiceCity = keyToCity(info.key);
                const correctCity = trial.correct_key === "a" ? "A" : "B";
                const correct = choiceCity === correctCity;
                if (trial.immediate_finish) {
                    end_trial(correct, choiceCity);
                } else {
                    display_element.innerHTML = `<div style="position:fixed; inset:0; display:flex; align-items:center; justify-content:center; text-align:center; font-size:22px; font-family:Arial,sans-serif;">You chose City ${choiceCity}</div>`;
                    setTimeout(() => end_trial(correct, choiceCity), 600);
                }
            }

            function end_trial(correct, choiceCity) {
                self.jsPsych.pluginAPI.clearAllTimeouts();
                if (typeof keyboardListener !== "undefined") {
                    self.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }

                const uniqueViewed = Object.keys(viewCounts).filter(k => viewCounts[k] > 0).map(Number);
                const nUnique = uniqueViewed.length;
                const nTotalViews = uniqueViewed.reduce((s, k) => s + viewCounts[k], 0);

                let firstSide = null;
                let firstFeatureIdx = null;
                if (firstCell !== null) {
                    firstSide = firstCell <= 5 ? "A" : "B";
                    firstFeatureIdx = (firstCell - 1) % 5;
                }

                const trial_data = {
                    rt: response.rt,
                    decision_rt_ms: responseAtMs,
                    response: response.key,
                    trial_started_at_utc: trialStartedAtUtc,
                    response_at_utc: responseAtUtc,
                    trial_finished_at_utc: new Date().toISOString(),
                    trial_duration_ms: performance.now() - trialStart,
                    task_trial_index: trial.trial_index,
                    task_phase: trial.is_practice ? "practice" : "main",
                    correct: correct,
                    correct_key: trial.correct_key,
                    choice_city: choiceCity,
                    larger_city: trial.correct_key === "a" ? "A" : "B",
                    event_timeline: eventTimeline,
                    show_dv_dots: trial.show_dv_dots,
                    dv_color_mapping: trial.dv_color_mapping,
                    dv_dot_palette: trial.show_dv_dots ? "oklch-balanced-blue-orange-v1" : "off",
                    dv_discrimination_levels: trial.show_dv_dots ? trial.discrimination_levels : [],
                    dv_validity_levels: trial.show_dv_dots ? trial.validity_levels : [],
                    click_events: clickEvents,
                    reveal_events: revealEvents,
                    // A complete per-trial mapping of every visible cell, including never-viewed cells.
                    stimulus_cells: Array.from({ length: N * 2 }, (_, index) => cellDetails(index + 1)),
                    reveal_counts: viewCounts,
                    cell_click_counts: cellClickCounts,
                    reveal_summary: Array.from({ length: N * 2 }, (_, index) => {
                        const cell = index + 1;
                        const match = revealEvents.find(r => r.cell_id === cell);
                        return { ...cellDetails(cell), revealed: revealedCells.has(cell),
                            reveal_order: match ? match.reveal_order : null,
                            reveal_time_ms: match ? match.time_ms : null,
                            raw_click_count: cellClickCounts[cell] || 0 };
                    }),
                    n_revealed_cells: revealedCells.size,
                    n_charged_reveals: Math.max(0, revealedCells.size - trial.free_reveals),
                    n_free_reveals: Math.min(revealedCells.size, trial.free_reveals),
                    n_total_cell_clicks: clickEvents.length,
                    n_repeat_cell_clicks: clickEvents.length - revealedCells.size,
                    time_to_first_reveal_ms: revealEvents.length ? revealEvents[0].time_ms : null,
                    reward_points_per_correct: trial.reward_points,
                    cost_points_per_reveal: trial.click_cost_points,
                    free_reveals_per_trial: trial.free_reveals,
                    earned_reward_points: roundPoints(correct ? trial.reward_points : 0),
                    information_cost_points: informationCostPoints,
                    net_trial_points: roundPoints((correct ? trial.reward_points : 0) - informationCostPoints),
                    first_cell: firstCell,
                    first_side: firstSide,
                    first_feature_idx: firstFeatureIdx,
                    first_feature_position: firstFeatureIdx !== null ? firstFeatureIdx + 1 : null,
                    first_position_id: firstFeatureIdx !== null ? firstFeatureIdx + 1 : null,
                    first_feature_id: firstFeatureIdx !== null ? trial.feature_ids[firstFeatureIdx] : null,
                    last_cell_before_response: lastCellBeforeResponse,
                    last_position_id: lastCellBeforeResponse ? (lastCellBeforeResponse - 1) % N + 1 : null,
                    last_feature_id: lastCellBeforeResponse ? trial.feature_ids[(lastCellBeforeResponse - 1) % N] : null,
                    n_unique_viewed: nUnique,
                    n_total_new_reveals: nTotalViews,
                    unique_cells_revealed: uniqueViewed,
                    last_reveal_supports_choice: lastViewSupports(response.key),
                    is_practice: trial.is_practice,
                    trial_index: trial.trial_index,
                    city_a_name: trial.city_a_name,
                    city_b_name: trial.city_b_name,
                    city_a_pop: trial.city_a_pop,
                    city_b_pop: trial.city_b_pop,
                    features_a: trial.features_a,
                    features_b: trial.features_b,
                    feature_labels: trial.feature_labels,
                    feature_ids: trial.feature_ids,
                    // Display position is randomized between participants, but remains fixed
                    // within each session. Record the actual top-to-bottom arrangement here.
                    position_feature_map: trial.feature_ids.map(function (id, i) {
                        return {
                            position_id: i + 1,
                            position: i + 1, // Backward-compatible alias.
                            row_y_px: rows[i].y,
                            left_cell_id: cellId("A", i),
                            right_cell_id: cellId("B", i),
                            feature_id: id,
                            feature_label: trial.feature_labels[i],
                        };
                    }),
                };

                display_element.innerHTML = "";
                self.jsPsych.finishTrial(trial_data);
            }
        }
    }

    CitySearchPlugin.info = info;
    return CitySearchPlugin;
})(jsPsychModule);
