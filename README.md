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
## Optional randomized D/V color dots

Add `dots=1` (also `color_dots=1`) to any iframe URL to display the same stacked D/V dot layout as the earlier `GeCity-run/pilot/dv-color-dots` under each central feature label. Default `dots=0` displays no dots. This switch is independent of `table` and `feedback`.

Each of the two colors (cyan and rose) corresponds to either Discrimination (D) or Validity (V). The cyan/rose meaning is randomized by a 50/50 draw **once per participant/session before the experiment begins**, held fixed across practice and all 150 main trials, and stated in the Welcome screen and the decision-screen legend. D is shown before V in each label, but the D and V **colors** swap between participants. Each attribute's 1..5 dot intensity is a **relative rank among the five attributes**, with darker shades denoting higher D or V, exactly as in the original pilot. Ranks follow stable feature identity and not randomized screen position.

The JSON metadata and each choice record contain `show_dv_dots`, `dv_color_mapping` (e.g. `{"discrimination":"rose","validity":"cyan"}`), `dv_discrimination_levels` and `dv_validity_levels` in the participant's top-to-bottom display order. `dv_dot_style` is `five-level-relative-rank` when enabled. The random color assignment happens after the full trial-order and position randomizations; `dots=1` and `dots=0` with the same seed therefore have identical trial and position order.

Example one-trial pilot with dots:

~~~html
<iframe src="https://bs-zhao.github.io/GeCity-run2/?download=1&amp;table=1&amp;feedback=0&amp;short=1&amp;reward=10&amp;cost=1&amp;free=1&amp;dots=1"
  title="City Population Decision Task — Experiment 2"
  style="width:100%;height:850px;border:1px solid #ccc;display:block;"
  allow="fullscreen" allowfullscreen></iframe>
~~~

**Design note:** In the `table=0&feedback=1` group, turning on D/V dots explicitly gives participants relative D/V information before they have learned it through feedback. Treat this as a distinct information manipulation from the original feedback-only group. The URL switch intentionally permits all four `table × feedback` combinations.

### Cyan/rose complementary five-level palette

The Experiment 2 palette now uses **cyan and rose** instead of blue/orange, avoiding the brown appearance of dark orange. The pair has mathematically opposite OKLCH hue angles (cyan = 180°, rose = 0°); at each of the five ranks, both colors use the same target OKLCH lightness/chroma values (respectively L/C: 0.97/0.013, 0.81/0.090, 0.66/0.115, 0.51/0.090, 0.38/0.066). The rounded sRGB swatches are:

- Cyan: `#ECF8F5`, `#7BD4C3`, `#1BA995`, `#0B7768`, `#074E44`.
- Rose: `#FDF2F5`, `#F2A9BE`, `#CB738F`, `#904F64`, `#5F3341`.

This scheme is tagged `oklch-complementary-cyan-rose-v1` in session metadata and every choice record. These are complementary hues with approximately matched perceived lightness/chroma, but equal attention capture is an experimental assumption to check, not a guarantee. The two dots remain vertically stacked (D on top, V below); D/V meanings are randomized 50/50 **once per participant**, remain fixed across trials and are recorded alongside rank levels. `dots=0` remains visually unchanged.

## Visual D/V statistics table (Table condition)

When `table=1`, the introductory feature-statistics screen and every pre-trial D/V statistics screen display **both percentages and horizontal bars** for each of the five features. Both D and V use an identical 0–100% scale, making magnitude comparisons intuitive; column subtitles explain D and V. Bars use the same neutral gray to avoid creating a second (unrandomized) color manipulation that could bias attention. The original five cue values, feature sorting, color-dot labels, cue order, click costs, and recorded observations are unchanged. `table=0` still displays no numerical D/V table.
