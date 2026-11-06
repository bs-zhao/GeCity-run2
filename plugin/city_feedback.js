var cityfeedback = (function (jspsych) {
    "use strict";

    const info = {
        name: "city-feedback",
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
            larger_city: {
                type: jspsych.ParameterType.STRING,
                default: "A",
            },
            choice_city: {
                type: jspsych.ParameterType.STRING,
                default: "",
            },
            correct: {
                type: jspsych.ParameterType.BOOL,
                default: undefined,
            },
            immediate_finish: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
            is_practice: {
                type: jspsych.ParameterType.BOOL,
                default: false,
            },
        },
    };

    class CityFeedbackPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const N = trial.feature_labels.length;
            const layout = computeArcLayout(N);
            const { cx, cityAX, cityBX, cityLabelY, rows } = layout;
            const CELL = layout.cell;
            const LABEL_W = layout.labelW;

            const highlightA = trial.larger_city === "A";
            const highlightB = trial.larger_city === "B";
            const cityAClass = highlightA ? "cs-city cs-city-highlight" : "cs-city";
            const cityBClass = highlightB ? "cs-city cs-city-highlight" : "cs-city";
            const sideHighlightA = highlightA ? " cs-side-highlight" : "";
            const sideHighlightB = highlightB ? " cs-side-highlight" : "";

            let resultNote = "";
            if (trial.choice_city) {
                resultNote = trial.correct
                    ? `<span class="cs-result cs-result-correct">Your answer was correct.</span>`
                    : `<span class="cs-result cs-result-wrong">Your answer was incorrect.</span>`;
            }

            let html = `
<style>
  #cs-root { position: fixed; inset: 0; font-family: Arial, sans-serif; user-select: none; }
  .cs-city { position: fixed; font-size: 20px; font-weight: bold; padding: 6px 18px; border-radius: 8px; border: 2px solid transparent; transform: translate(-50%, -50%); }
  .cs-city-highlight {
    background: #fff3cd; border-color: #e6a800 !important;
    box-shadow: 0 0 0 3px rgba(230, 168, 0, 0.35);
  }
  .cs-cell {
    position: fixed; width: ${CELL}px; height: ${CELL}px;
    border: 2px solid #333; border-radius: 10px;
    background: #f5f5f5; display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: bold; color: #222;
  }
  .cs-side-highlight { background: #fff9e6; border-color: #e6a800; }
  .cs-label {
    position: fixed; width: ${LABEL_W}px; text-align: center;
    font-size: 15px; font-weight: 600; color: #333;
    transform: translate(-50%, -50%);
  }
  #cs-footer {
    position: fixed; bottom: 6%; left: 0; right: 0; text-align: center;
    font-size: 16px; color: #444;
  }
  .cs-result { font-size: 18px; font-weight: normal; margin-bottom: 10px; }
  .cs-result-correct { color: #2d6a4f; }
  .cs-result-wrong { color: #9b2226; }
</style>
<div id="cs-root">
  <div id="cs-city-a" class="${cityAClass}" style="left:${cityAX}px; top:${cityLabelY}px;">City A</div>
  <div id="cs-city-b" class="${cityBClass}" style="left:${cityBX}px; top:${cityLabelY}px;">City B</div>
`;

            for (const row of rows) {
                const { fi, y, leftX, rightX } = row;
                const label = trial.feature_labels[fi];
                const valA = trial.features_a[fi];
                const valB = trial.features_b[fi];
                const textA = valA === 1 ? "Yes" : "No";
                const textB = valB === 1 ? "Yes" : "No";

                html += `<div class="cs-cell${sideHighlightA}" style="left:${leftX}px; top:${y - CELL / 2}px;">${textA}</div>`;
                html += `<div class="cs-label" style="left:${cx}px; top:${y}px;">${label}</div>`;
                html += `<div class="cs-cell${sideHighlightB}" style="left:${rightX}px; top:${y - CELL / 2}px;">${textB}</div>`;
            }

            html += `<div id="cs-footer">
                <p><strong>City ${trial.larger_city}</strong> has the larger population. ${resultNote}</p>
                <p>Press <strong>Space</strong> to continue</p>
            </div></div>`;
            display_element.innerHTML = html;

            const self = this;
            const keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: function () {
                    self.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                    display_element.innerHTML = "";
                    self.jsPsych.finishTrial({
                        larger_city: trial.larger_city,
                        choice_city: trial.choice_city,
                        correct: trial.correct,
                        is_practice: trial.is_practice,
                    });
                },
                valid_responses: [" "],
                rt_method: "performance",
                persist: false,
                allow_held_key: false,
            });
        }
    }

    CityFeedbackPlugin.info = info;
    return CityFeedbackPlugin;
})(jsPsychModule);
