// Simple participant-controlled rest screen for the main experiment.
// Appears after main trials 50 and 100 (never during practice).
// No visible timer or break-duration measurement.
var gecitybreak = (function (jspsych) {
 "use strict";
 const info = {
  name: "gecity-break",
  parameters: {
   break_number: {type: jspsych.ParameterType.INT, default: 1},
   completed_main_trials: {type: jspsych.ParameterType.INT, default: 50},
   total_main_trials: {type: jspsych.ParameterType.INT, default: 150}
  }
 };

 class GeCityBreakPlugin {
  constructor(jsPsych) { this.jsPsych = jsPsych; }
  trial(display_element, trial) {
   const completed = trial.completed_main_trials;
   const total = trial.total_main_trials;
   const fraction = trial.break_number === 1 ? "1/3" : "2/3";

   display_element.innerHTML =
    '<div style="max-width:700px;margin:0 auto;text-align:center;font-family:Arial,sans-serif;line-height:1.7;">' +
      '<h2 style="font-size:28px;margin-bottom:16px;">Take a Break</h2>' +
      '<p style="font-size:20px;">You have completed <b>' + completed +
        ' of ' + total + '</b> trials (' + fraction + ').</p>' +
      '<p>You may take a short break now.</p>' +
      '<p style="margin-top:28px;">Press <b>Space</b> to continue.</p>' +
    '</div>';

   let finished = false;
   const listener = this.jsPsych.pluginAPI.getKeyboardResponse({
    callback_function: () => {
     if (finished) return;
     finished = true;
     this.jsPsych.pluginAPI.cancelKeyboardResponse(listener);
     display_element.innerHTML = "";
     this.jsPsych.finishTrial({
      break_number: trial.break_number,
      completed_main_trials: completed,
      total_main_trials: total,
      progress_fraction: fraction,
      resumed_by: "space"
     });
    },
    valid_responses: [" "],
    rt_method: "performance",
    persist: false,
    allow_held_key: false
   });
  }
 }

 GeCityBreakPlugin.info = info;
 return GeCityBreakPlugin;
})(jsPsychModule);
