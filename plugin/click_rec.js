var clickrec = (function (jspsych) {
    "use strict";

    const info = {
        name: "clickrec",
        parameters: {},
    };

    class PluginNamePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            const LF = 25;
            var new_html = `<div id="fix" style="background-color: black; width: ${LF}px; height: ${LF}px; border: 0px; margin: auto;"></div>`;
            display_element.innerHTML = new_html;

            display_element.querySelector('#fix').addEventListener('click', function () {
                setTimeout(() => {
                    end_trial();
                }, 500);
            });

            const end_trial = () => {
                this.jsPsych.pluginAPI.clearAllTimeouts();
                display_element.innerHTML = "";
                this.jsPsych.finishTrial({});
            };
        }
    }
    PluginNamePlugin.info = info;

    return PluginNamePlugin;
})(jsPsychModule);
