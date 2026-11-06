var dvcue = (function (jspsych) {
    "use strict";

    const info = {
        name: "dv-cue",
        parameters: {
            feature_labels: {
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_disc: {
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            feature_valid: {
                type: jspsych.ParameterType.STRING,
                array: true,
                default: undefined,
            },
            is_practice: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
        },
    };

    class DvCuePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const N = trial.feature_labels.length;
            const layout = computeArcLayout(N);
            const { cx, rows } = layout;
            const LABEL_W = layout.labelW;

            let html = `
<style>
  #dv-root { position: fixed; inset: 0; font-family: Arial, sans-serif; user-select: none; }
  #dv-prompt { position: fixed; top: 8%; left: 0; right: 0; text-align: center; font-size: 22px; font-weight: bold; }
  .dv-row {
    position: fixed; transform: translate(-50%, -50%);
    width: ${LABEL_W + 200}px; text-align: center;
    font-size: 15px; line-height: 1.5;
  }
  .dv-name { font-weight: 700; font-size: 16px; color: #222; }
  .dv-stats { color: #444; margin-top: 4px; }
  .dv-disc { margin-right: 16px; }
  #dv-footer {
    position: fixed; bottom: 6%; left: 0; right: 0; text-align: center;
    font-size: 16px; color: #444;
  }
</style>
<div id="dv-root">
  <div id="dv-prompt">Feature statistics for this block</div>
`;

            for (const row of rows) {
                const { fi, y } = row;
                const label = trial.feature_labels[fi];
                const disc = trial.feature_disc[fi];
                const valid = trial.feature_valid[fi];
                html += `
  <div class="dv-row" style="left:${cx}px; top:${y}px;">
    <div class="dv-name">${label}</div>
    <div class="dv-stats">
      <span class="dv-disc">Disc: <strong>${disc}</strong></span>
      <span class="dv-val">Val: <strong>${valid}</strong></span>
    </div>
  </div>`;
            }

            html += `<div id="dv-footer">Press <strong>Space</strong> to start the trial</div></div>`;
            display_element.innerHTML = html;

            const self = this;
            const keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: function () {
                    self.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                    display_element.innerHTML = "";
                    self.jsPsych.finishTrial({ is_practice: trial.is_practice });
                },
                valid_responses: [" "],
                rt_method: "performance",
                persist: false,
                allow_held_key: false,
            });
        }
    }

    DvCuePlugin.info = info;
    return DvCuePlugin;
})(jsPsychModule);
