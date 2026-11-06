# GeCity Experiment 2: persistent click reveals with configurable information cost

Independent experiment implementation based on bs-zhao/GeCity-run, using exactly the same trialset8: 150 German city pairs, 5 cues, 3 practice trials, two conditions and breaks after main trial 50 and 100.

## Changes

- Left-click a concealed cell to reveal its Yes/No value permanently until the decision. Hovering is ignored.
- Reward N (default 10) for correct choice, zero for incorrect. First Z (default 1) new reveals per trial are free; each new reveal thereafter costs M (default 1). Repeat clicks on revealed cells are logged but incur no extra charge.
- Net trial points = correctness * N - max(0, new reveals - Z) * M. Negative net points are possible. Practice and main totals are computed separately.
- The decision display continuously shows the cost, starting at -0 points. Correctness/earned points are not displayed to Table/no-feedback participants.

## Qualtrics iframe

After enabling GitHub Pages (Settings > Pages > Deploy from main / root), embed this in Qualtrics alongside a File Upload question on the same page:

~~~html
<iframe src="https://bs-zhao.github.io/GeCity-run2/?download=1&amp;feedback=1&amp;table=0&amp;short=0&amp;reward=10&amp;cost=1&amp;free=1"
  title="City Population Decision Task — Experiment 2"
  style="width:100%;height:850px;border:1px solid #ccc;display:block;"
  allow="fullscreen" allowfullscreen></iframe>
~~~

Parameters: reward (alias N, default 10), cost (alias M, default 1), free (alias Z, default 1), table (0 or 1), feedback (0 or 1), short (0 or 1), download (0 or 1), debug, trials, practice, seed, participant.
Table condition: table=1&feedback=0. Feedback-learning condition: table=0&feedback=1. Short pilot: short=1. Numeric values must be nonnegative; free must be an integer. Invalid values use defaults with browser console warnings.

## Data schema (version 3)

Each choice record includes click_events (all primary button cell clicks, including repeated clicks), reveal_events (only new revelations), event_timeline, reveal_counts, cell_click_counts, reveal_summary, n_revealed_cells, n_charged_reveals, n_free_reveals, n_total_cell_clicks, n_repeat_cell_clicks, information_cost_points, earned_reward_points and net_trial_points.
Each click has time_ms since choice onset, a UTC timestamp, city A/B, stable feature_id, row position_id (1..5), cell_id (1..10), cell value, click/reveal order, is_repeat_click, is_free_reveal, incremental cost and cumulative cost. Output also retains complete stimulus_cells and per-trial position_feature_map.
Top-level JSON includes score_summary for main and practice separately. Hover dwell times are not measures in this experiment.

IMPORTANT: GitHub Pages and iframe alone do not save data in Qualtrics. Confirm fullscreen, download, File Upload and survey Next-button flow in Qualtrics Preview.