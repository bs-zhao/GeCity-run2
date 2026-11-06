// Generated from the curated trialset8 manifest; original German city observations unchanged.
// Copy this file into s3_exp_program/exp_run/v1/data/ and GeCity-run/data/.
window.GECITY_TRIALSET = {
  "schema_version": 1,
  "trialset_name": "trialset8",
  "source_file": "master_trials.csv",
  "trial_count": 150,
  "features": [
    {
      "id": "National_Capital",
      "label": "Capital",
      "positive": true,
      "target_discrimination": 0.05,
      "target_validity": 1,
      "actual_discrimination": 0.05333333333333334,
      "actual_validity": 1,
      "discriminating_trials": 8,
      "correct_when_discriminating": 8
    },
    {
      "id": "Exposition_Site",
      "label": "Expo Site",
      "positive": true,
      "target_discrimination": 0.29,
      "target_validity": 0.88,
      "actual_discrimination": 0.29333333333333333,
      "actual_validity": 0.8863636363636364,
      "discriminating_trials": 44,
      "correct_when_discriminating": 39
    },
    {
      "id": "Soccer_Team",
      "label": "Soccer Team",
      "positive": true,
      "target_discrimination": 0.41,
      "target_validity": 0.77,
      "actual_discrimination": 0.41333333333333333,
      "actual_validity": 0.7741935483870968,
      "discriminating_trials": 62,
      "correct_when_discriminating": 48
    },
    {
      "id": "Intercity_trainline",
      "label": "Rail Line",
      "positive": true,
      "target_discrimination": 0.52,
      "target_validity": 0.66,
      "actual_discrimination": 0.52,
      "actual_validity": 0.6538461538461539,
      "discriminating_trials": 78,
      "correct_when_discriminating": 51
    },
    {
      "id": "University",
      "label": "University",
      "positive": true,
      "target_discrimination": 0.62,
      "target_validity": 0.55,
      "actual_discrimination": 0.62,
      "actual_validity": 0.5483870967741935,
      "discriminating_trials": 93,
      "correct_when_discriminating": 51
    }
  ],
  "trials": [
    {
      "trial_id": 1,
      "pair_index": 122,
      "left_city": "Hamburg",
      "right_city": "Neuss",
      "left_population": 1652363,
      "right_population": 147019,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 2,
      "pair_index": 1327,
      "left_city": "Chemnitz",
      "right_city": "Osnabrueck",
      "left_population": 294244,
      "right_population": 163168,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 3,
      "pair_index": 206,
      "left_city": "Munich",
      "right_city": "Cottbus",
      "left_population": 1229026,
      "right_population": 125891,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 4,
      "pair_index": 2451,
      "left_city": "Gera",
      "right_city": "Heidelberg",
      "left_population": 129037,
      "right_population": 136796,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 5,
      "pair_index": 1071,
      "left_city": "Magdeburg",
      "right_city": "Bochum",
      "left_population": 278807,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 6,
      "pair_index": 1003,
      "left_city": "Bonn",
      "right_city": "Dresden",
      "left_population": 292234,
      "right_population": 490571,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 7,
      "pair_index": 748,
      "left_city": "Duisburg",
      "right_city": "Gelsenkirchen",
      "left_population": 535447,
      "right_population": 293714,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 8,
      "pair_index": 1765,
      "left_city": "Osnabrueck",
      "right_city": "Rostock",
      "left_population": 163168,
      "right_population": 248088,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 9,
      "pair_index": 1090,
      "left_city": "Bochum",
      "right_city": "Mainz",
      "left_population": 396486,
      "right_population": 179486,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 10,
      "pair_index": 1766,
      "left_city": "Rostock",
      "right_city": "Leverkusen",
      "left_population": 248088,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 11,
      "pair_index": 1318,
      "left_city": "Luebeck",
      "right_city": "Chemnitz",
      "left_population": 214758,
      "right_population": 294244,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 12,
      "pair_index": 1632,
      "left_city": "Moenchengladbach",
      "right_city": "Rostock",
      "left_population": 259436,
      "right_population": 248088,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 13,
      "pair_index": 1928,
      "left_city": "Moers",
      "right_city": "Oberhausen",
      "left_population": 104595,
      "right_population": 223840,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 14,
      "pair_index": 2506,
      "left_city": "Siegen",
      "right_city": "Gera",
      "left_population": 109174,
      "right_population": 129037,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 15,
      "pair_index": 1079,
      "left_city": "Kiel",
      "right_city": "Bochum",
      "left_population": 245567,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 16,
      "pair_index": 571,
      "left_city": "Stuttgart",
      "right_city": "Wolfsburg",
      "left_population": 579988,
      "right_population": 128510,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 17,
      "pair_index": 436,
      "left_city": "Offenbach",
      "right_city": "Essen",
      "left_population": 114992,
      "right_population": 626973,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 18,
      "pair_index": 1548,
      "left_city": "BergischGladbach",
      "right_city": "Karlsruhe",
      "left_population": 104037,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 19,
      "pair_index": 1534,
      "left_city": "Karlsruhe",
      "right_city": "Bottrop",
      "left_population": 275061,
      "right_population": 118936,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 20,
      "pair_index": 1652,
      "left_city": "Potsdam",
      "right_city": "Moenchengladbach",
      "left_population": 139794,
      "right_population": 259436,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 21,
      "pair_index": 645,
      "left_city": "Duesseldorf",
      "right_city": "Schwerin",
      "left_population": 575794,
      "right_population": 127447,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 22,
      "pair_index": 2560,
      "left_city": "Siegen",
      "right_city": "Schwerin",
      "left_population": 109174,
      "right_population": 127447,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 23,
      "pair_index": 442,
      "left_city": "Essen",
      "right_city": "Koblenz",
      "left_population": 626973,
      "right_population": 108733,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 24,
      "pair_index": 1698,
      "left_city": "Braunschweig(Brunswick)",
      "right_city": "Potsdam",
      "left_population": 258833,
      "right_population": 139794,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 25,
      "pair_index": 1577,
      "left_city": "Wiesbaden",
      "right_city": "Paderborn",
      "left_population": 260301,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 26,
      "pair_index": 1540,
      "left_city": "Karlsruhe",
      "right_city": "Ulm",
      "left_population": 275061,
      "right_population": 110529,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 27,
      "pair_index": 1847,
      "left_city": "Gera",
      "right_city": "Krefeld",
      "left_population": 129037,
      "right_population": 244020,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 28,
      "pair_index": 1551,
      "left_city": "Karlsruhe",
      "right_city": "Erlangen",
      "left_population": 275061,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 29,
      "pair_index": 162,
      "left_city": "Munich",
      "right_city": "Dresden",
      "left_population": 1229026,
      "right_population": 490571,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 30,
      "pair_index": 806,
      "left_city": "Rostock",
      "right_city": "Hannover",
      "left_population": 248088,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 31,
      "pair_index": 232,
      "left_city": "Bremen",
      "right_city": "Cologne",
      "left_population": 551219,
      "right_population": 953551,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 32,
      "pair_index": 631,
      "left_city": "Duesseldorf",
      "right_city": "Muelheim",
      "left_population": 575794,
      "right_population": 177681,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 3,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 33,
      "pair_index": 1008,
      "left_city": "Dresden",
      "right_city": "Moenchengladbach",
      "left_population": 490571,
      "right_population": 259436,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 34,
      "pair_index": 1498,
      "left_city": "Augsburg",
      "right_city": "Karlsruhe",
      "left_population": 256877,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 35,
      "pair_index": 1912,
      "left_city": "Cottbus",
      "right_city": "Oberhausen",
      "left_population": 125891,
      "right_population": 223840,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 36,
      "pair_index": 2350,
      "left_city": "Leverkusen",
      "right_city": "Siegen",
      "left_population": 160919,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 37,
      "pair_index": 1497,
      "left_city": "Karlsruhe",
      "right_city": "Braunschweig(Brunswick)",
      "left_population": 275061,
      "right_population": 258833,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 38,
      "pair_index": 685,
      "left_city": "Moenchengladbach",
      "right_city": "Bremen",
      "left_population": 259436,
      "right_population": 551219,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 39,
      "pair_index": 2258,
      "left_city": "Regensburg",
      "right_city": "Solingen",
      "left_population": 121691,
      "right_population": 165401,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 40,
      "pair_index": 406,
      "left_city": "Essen",
      "right_city": "Erfurt",
      "left_population": 626973,
      "right_population": 208989,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 41,
      "pair_index": 1950,
      "left_city": "Luebeck",
      "right_city": "Paderborn",
      "left_population": 214758,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 42,
      "pair_index": 1608,
      "left_city": "Potsdam",
      "right_city": "Muenster",
      "left_population": 139794,
      "right_population": 259438,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 43,
      "pair_index": 2586,
      "left_city": "Recklinghausen",
      "right_city": "Paderborn",
      "left_population": 125060,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 44,
      "pair_index": 864,
      "left_city": "Mannheim",
      "right_city": "Leipzig",
      "left_population": 310411,
      "right_population": 511079,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 45,
      "pair_index": 1406,
      "left_city": "Hildesheim",
      "right_city": "Gelsenkirchen",
      "left_population": 105291,
      "right_population": 293714,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 46,
      "pair_index": 810,
      "left_city": "Oberhausen",
      "right_city": "Hannover",
      "left_population": 223840,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 47,
      "pair_index": 598,
      "left_city": "Bremen",
      "right_city": "Duesseldorf",
      "left_population": 551219,
      "right_population": 575794,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 48,
      "pair_index": 1371,
      "left_city": "Mainz",
      "right_city": "Gelsenkirchen",
      "left_population": 179486,
      "right_population": 293714,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 49,
      "pair_index": 2154,
      "left_city": "Hamm",
      "right_city": "Offenbach",
      "left_population": 179639,
      "right_population": 114992,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 50,
      "pair_index": 26,
      "left_city": "Berlin",
      "right_city": "Moenchengladbach",
      "left_population": 3433695,
      "right_population": 259436,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 5,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 51,
      "pair_index": 2306,
      "left_city": "Ludwigshafen",
      "right_city": "Wuerzburg",
      "left_population": 162173,
      "right_population": 127777,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 52,
      "pair_index": 558,
      "left_city": "Stuttgart",
      "right_city": "Herne",
      "left_population": 579988,
      "right_population": 178132,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 53,
      "pair_index": 2684,
      "left_city": "Offenbach",
      "right_city": "Siegen",
      "left_population": 114992,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 54,
      "pair_index": 441,
      "left_city": "Essen",
      "right_city": "Siegen",
      "left_population": 626973,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 55,
      "pair_index": 1344,
      "left_city": "Chemnitz",
      "right_city": "Ulm",
      "left_population": 294244,
      "right_population": 110529,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 56,
      "pair_index": 637,
      "left_city": "Duesseldorf",
      "right_city": "Oldenburg",
      "left_population": 575794,
      "right_population": 143131,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 57,
      "pair_index": 1316,
      "left_city": "Aachen",
      "right_city": "Chemnitz",
      "left_population": 241961,
      "right_population": 294244,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 58,
      "pair_index": 1351,
      "left_city": "Chemnitz",
      "right_city": "Erlangen",
      "left_population": 294244,
      "right_population": 102440,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 59,
      "pair_index": 364,
      "left_city": "Salzgitter",
      "right_city": "Frankfurt",
      "left_population": 114355,
      "right_population": 644865,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 60,
      "pair_index": 1062,
      "left_city": "Dresden",
      "right_city": "Fuerth",
      "left_population": 490571,
      "right_population": 103362,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 61,
      "pair_index": 1176,
      "left_city": "Gelsenkirchen",
      "right_city": "Bielefeld",
      "left_population": 293714,
      "right_population": 319037,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 62,
      "pair_index": 2332,
      "left_city": "Leverkusen",
      "right_city": "Bremerhaven",
      "left_population": 160919,
      "right_population": 130446,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 63,
      "pair_index": 2325,
      "left_city": "Reutlingen",
      "right_city": "Ludwigshafen",
      "left_population": 103687,
      "right_population": 162173,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 64,
      "pair_index": 2153,
      "left_city": "Hamm",
      "right_city": "Heilbronn",
      "left_population": 179639,
      "right_population": 115843,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 65,
      "pair_index": 2687,
      "left_city": "Ingolstadt",
      "right_city": "Offenbach",
      "left_population": 105489,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 66,
      "pair_index": 10,
      "left_city": "Hannover",
      "right_city": "Berlin",
      "left_population": 513010,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 67,
      "pair_index": 2733,
      "left_city": "Witten",
      "right_city": "Siegen",
      "left_population": 105403,
      "right_population": 109174,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 68,
      "pair_index": 1502,
      "left_city": "Karlsruhe",
      "right_city": "Aachen",
      "left_population": 275061,
      "right_population": 241961,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 69,
      "pair_index": 1045,
      "left_city": "Paderborn",
      "right_city": "Dresden",
      "left_population": 120680,
      "right_population": 490571,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 70,
      "pair_index": 2667,
      "left_city": "Hildesheim",
      "right_city": "Bottrop",
      "left_population": 105291,
      "right_population": 118936,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 71,
      "pair_index": 692,
      "left_city": "Oberhausen",
      "right_city": "Bremen",
      "left_population": 223840,
      "right_population": 551219,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 72,
      "pair_index": 2348,
      "left_city": "Pforzhein",
      "right_city": "Leverkusen",
      "left_population": 112944,
      "right_population": 160919,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 73,
      "pair_index": 1656,
      "left_city": "Moenchengladbach",
      "right_city": "Gera",
      "left_population": 259436,
      "right_population": 129037,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 74,
      "pair_index": 1347,
      "left_city": "Chemnitz",
      "right_city": "Jena",
      "left_population": 294244,
      "right_population": 105518,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 75,
      "pair_index": 811,
      "left_city": "Luebeck",
      "right_city": "Hannover",
      "left_population": 214758,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 76,
      "pair_index": 2477,
      "left_city": "Bremerhaven",
      "right_city": "Paderborn",
      "left_population": 130446,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 77,
      "pair_index": 976,
      "left_city": "Nuremberg",
      "right_city": "Goettingen",
      "left_population": 493692,
      "right_population": 121831,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 78,
      "pair_index": 632,
      "left_city": "Solingen",
      "right_city": "Duesseldorf",
      "left_population": 165401,
      "right_population": 575794,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 79,
      "pair_index": 1777,
      "left_city": "Paderborn",
      "right_city": "Rostock",
      "left_population": 120680,
      "right_population": 248088,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 80,
      "pair_index": 1368,
      "left_city": "Gelsenkirchen",
      "right_city": "Saarbruecken",
      "left_population": 293714,
      "right_population": 191694,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 81,
      "pair_index": 1029,
      "left_city": "Leverkusen",
      "right_city": "Dresden",
      "left_population": 160919,
      "right_population": 490571,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 82,
      "pair_index": 840,
      "left_city": "Hannover",
      "right_city": "Paderborn",
      "left_population": 513010,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 83,
      "pair_index": 1265,
      "left_city": "Moenchengladbach",
      "right_city": "Halle",
      "left_population": 259436,
      "right_population": 310234,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 84,
      "pair_index": 1002,
      "left_city": "Dresden",
      "right_city": "Gelsenkirchen",
      "left_population": 490571,
      "right_population": 293714,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 85,
      "pair_index": 4,
      "left_city": "Essen",
      "right_city": "Berlin",
      "left_population": 626973,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 86,
      "pair_index": 2420,
      "left_city": "Siegen",
      "right_city": "Potsdam",
      "left_population": 109174,
      "right_population": 139794,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 87,
      "pair_index": 2693,
      "left_city": "Fuerth",
      "right_city": "Offenbach",
      "left_population": 103362,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 88,
      "pair_index": 1035,
      "left_city": "Dresden",
      "right_city": "Bremerhaven",
      "left_population": 490571,
      "right_population": 130446,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 89,
      "pair_index": 1166,
      "left_city": "Pforzhein",
      "right_city": "Wuppertal",
      "left_population": 112944,
      "right_population": 383660,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 90,
      "pair_index": 669,
      "left_city": "Erlangen",
      "right_city": "Duesseldorf",
      "left_population": 102440,
      "right_population": 575794,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 91,
      "pair_index": 2122,
      "left_city": "Freiburg",
      "right_city": "Paderborn",
      "left_population": 191029,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 92,
      "pair_index": 11,
      "left_city": "Leipzig",
      "right_city": "Berlin",
      "left_population": 511079,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 93,
      "pair_index": 2149,
      "left_city": "Goettingen",
      "right_city": "Hamm",
      "left_population": 121831,
      "right_population": 179639,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 94,
      "pair_index": 843,
      "left_city": "Offenbach",
      "right_city": "Hannover",
      "left_population": 114992,
      "right_population": 513010,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 95,
      "pair_index": 66,
      "left_city": "Berlin",
      "right_city": "Offenbach",
      "left_population": 3433695,
      "right_population": 114992,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 3,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 96,
      "pair_index": 2364,
      "left_city": "Neuss",
      "right_city": "Heidelberg",
      "left_population": 147019,
      "right_population": 136796,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 97,
      "pair_index": 1308,
      "left_city": "Chemnitz",
      "right_city": "Karlsruhe",
      "left_population": 294244,
      "right_population": 275061,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 98,
      "pair_index": 1655,
      "left_city": "Moenchengladbach",
      "right_city": "Bremerhaven",
      "left_population": 259436,
      "right_population": 130446,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 99,
      "pair_index": 1296,
      "left_city": "Siegen",
      "right_city": "Halle",
      "left_population": 109174,
      "right_population": 310234,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 100,
      "pair_index": 1305,
      "left_city": "Chemnitz",
      "right_city": "Gelsenkirchen",
      "left_population": 294244,
      "right_population": 293714,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 101,
      "pair_index": 1313,
      "left_city": "Chemnitz",
      "right_city": "Augsburg",
      "left_population": 294244,
      "right_population": 256877,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 102,
      "pair_index": 419,
      "left_city": "Essen",
      "right_city": "Oldenburg",
      "left_population": 626973,
      "right_population": 143131,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 103,
      "pair_index": 1054,
      "left_city": "Dresden",
      "right_city": "Koblenz",
      "left_population": 490571,
      "right_population": 108733,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 104,
      "pair_index": 706,
      "left_city": "Leverkusen",
      "right_city": "Bremen",
      "left_population": 160919,
      "right_population": 551219,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 105,
      "pair_index": 559,
      "left_city": "Stuttgart",
      "right_city": "Muelheim",
      "left_population": 579988,
      "right_population": 177681,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 106,
      "pair_index": 2682,
      "left_city": "Pforzhein",
      "right_city": "Offenbach",
      "left_population": 112944,
      "right_population": 114992,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 107,
      "pair_index": 2662,
      "left_city": "Ulm",
      "right_city": "Bottrop",
      "left_population": 110529,
      "right_population": 118936,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 108,
      "pair_index": 795,
      "left_city": "Hannover",
      "right_city": "Halle",
      "left_population": 513010,
      "right_population": 310234,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 109,
      "pair_index": 1133,
      "left_city": "Gelsenkirchen",
      "right_city": "Wuppertal",
      "left_population": 293714,
      "right_population": 383660,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 110,
      "pair_index": 1067,
      "left_city": "Halle",
      "right_city": "Bochum",
      "left_population": 310234,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 111,
      "pair_index": 74,
      "left_city": "Ingolstadt",
      "right_city": "Berlin",
      "left_population": 105489,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 3,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 112,
      "pair_index": 47,
      "left_city": "Berlin",
      "right_city": "Leverkusen",
      "left_population": 3433695,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 5,
      "left_cues": [
        1,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 113,
      "pair_index": 2160,
      "left_city": "Hamm",
      "right_city": "Jena",
      "left_population": 179639,
      "right_population": 105518,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 114,
      "pair_index": 2180,
      "left_city": "Mainz",
      "right_city": "Remscheid",
      "left_population": 179486,
      "right_population": 123155,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 115,
      "pair_index": 2580,
      "left_city": "Hildesheim",
      "right_city": "Cottbus",
      "left_population": 105291,
      "right_population": 125891,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 116,
      "pair_index": 1181,
      "left_city": "Bielefeld",
      "right_city": "Rostock",
      "left_population": 319037,
      "right_population": 248088,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 117,
      "pair_index": 1671,
      "left_city": "Moenchengladbach",
      "right_city": "Pforzhein",
      "left_population": 259436,
      "right_population": 112944,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 118,
      "pair_index": 7,
      "left_city": "Duesseldorf",
      "right_city": "Berlin",
      "left_population": 575794,
      "right_population": 3433695,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        1,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 119,
      "pair_index": 672,
      "left_city": "Leipzig",
      "right_city": "Bremen",
      "left_population": 511079,
      "right_population": 551219,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 120,
      "pair_index": 2333,
      "left_city": "Leverkusen",
      "right_city": "Gera",
      "left_population": 160919,
      "right_population": 129037,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 121,
      "pair_index": 1863,
      "left_city": "Erlangen",
      "right_city": "Krefeld",
      "left_population": 102440,
      "right_population": 244020,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 122,
      "pair_index": 1524,
      "left_city": "Gera",
      "right_city": "Karlsruhe",
      "left_population": 129037,
      "right_population": 275061,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 123,
      "pair_index": 242,
      "left_city": "Cologne",
      "right_city": "Chemnitz",
      "left_population": 953551,
      "right_population": 294244,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 124,
      "pair_index": 709,
      "left_city": "Bremen",
      "right_city": "Potsdam",
      "left_population": 551219,
      "right_population": 139794,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 125,
      "pair_index": 1381,
      "left_city": "Gelsenkirchen",
      "right_city": "Darmstadt",
      "left_population": 293714,
      "right_population": 138920,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 126,
      "pair_index": 1129,
      "left_city": "Fuerth",
      "right_city": "Bochum",
      "left_population": 103362,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 127,
      "pair_index": 744,
      "left_city": "Duisburg",
      "right_city": "Dresden",
      "left_population": 535447,
      "right_population": 490571,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 128,
      "pair_index": 1078,
      "left_city": "Rostock",
      "right_city": "Bochum",
      "left_population": 248088,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 129,
      "pair_index": 408,
      "left_city": "Saarbruecken",
      "right_city": "Essen",
      "left_population": 191694,
      "right_population": 626973,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 130,
      "pair_index": 2484,
      "left_city": "Siegen",
      "right_city": "Bremerhaven",
      "left_population": 109174,
      "right_population": 130446,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 131,
      "pair_index": 1700,
      "left_city": "Gera",
      "right_city": "Braunschweig(Brunswick)",
      "left_population": 129037,
      "right_population": 258833,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 132,
      "pair_index": 2417,
      "left_city": "Zwickau",
      "right_city": "Potsdam",
      "left_population": 114636,
      "right_population": 139794,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 133,
      "pair_index": 1665,
      "left_city": "Moenchengladbach",
      "right_city": "Paderborn",
      "left_population": 259436,
      "right_population": 120680,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 134,
      "pair_index": 1403,
      "left_city": "Gelsenkirchen",
      "right_city": "Jena",
      "left_population": 293714,
      "right_population": 105518,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        1,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 135,
      "pair_index": 673,
      "left_city": "Bremen",
      "right_city": "Nuremberg",
      "left_population": 551219,
      "right_population": 493692,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 136,
      "pair_index": 990,
      "left_city": "Witten",
      "right_city": "Nuremberg",
      "left_population": 105403,
      "right_population": 493692,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 137,
      "pair_index": 190,
      "left_city": "Munich",
      "right_city": "Herne",
      "left_population": 1229026,
      "right_population": 178132,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 138,
      "pair_index": 1923,
      "left_city": "Oberhausen",
      "right_city": "Siegen",
      "left_population": 223840,
      "right_population": 109174,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        1
      ]
    },
    {
      "trial_id": 139,
      "pair_index": 2151,
      "left_city": "Paderborn",
      "right_city": "Hamm",
      "left_population": 120680,
      "right_population": 179639,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        0,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 140,
      "pair_index": 2197,
      "left_city": "Ludwigshafen",
      "right_city": "Herne",
      "left_population": 162173,
      "right_population": 178132,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 141,
      "pair_index": 1278,
      "left_city": "Halle",
      "right_city": "Leverkusen",
      "left_population": 310234,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 142,
      "pair_index": 407,
      "left_city": "Essen",
      "right_city": "Kassel",
      "left_population": 626973,
      "right_population": 194268,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "trial_id": 143,
      "pair_index": 507,
      "left_city": "Bottrop",
      "right_city": "Dortmund",
      "left_population": 118936,
      "right_population": 599055,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 4,
      "left_cues": [
        0,
        0,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 144,
      "pair_index": 1973,
      "left_city": "Hagen",
      "right_city": "Leverkusen",
      "left_population": 214449,
      "right_population": 160919,
      "correct_side": "left",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        0,
        0
      ]
    },
    {
      "trial_id": 145,
      "pair_index": 2589,
      "left_city": "Offenbach",
      "right_city": "Recklinghausen",
      "left_population": 114992,
      "right_population": 125060,
      "correct_side": "right",
      "has_conflicting_cues": true,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        0,
        0
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "trial_id": 146,
      "pair_index": 1093,
      "left_city": "Solingen",
      "right_city": "Bochum",
      "left_population": 165401,
      "right_population": 396486,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        0,
        0,
        1,
        0
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 147,
      "pair_index": 98,
      "left_city": "Hamburg",
      "right_city": "Karlsruhe",
      "left_population": 1652363,
      "right_population": 275061,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        1,
        1,
        0
      ]
    },
    {
      "trial_id": 148,
      "pair_index": 311,
      "left_city": "Bochum",
      "right_city": "Frankfurt",
      "left_population": 396486,
      "right_population": 644865,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        1,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "trial_id": 149,
      "pair_index": 913,
      "left_city": "Leipzig",
      "right_city": "Offenbach",
      "left_population": 511079,
      "right_population": 114992,
      "correct_side": "left",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 2,
      "left_cues": [
        0,
        1,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "trial_id": 150,
      "pair_index": 1761,
      "left_city": "Freiburg",
      "right_city": "Rostock",
      "left_population": 191029,
      "right_population": 248088,
      "correct_side": "right",
      "has_conflicting_cues": false,
      "n_discriminating_cues": 1,
      "left_cues": [
        0,
        0,
        0,
        1,
        1
      ],
      "right_cues": [
        0,
        0,
        0,
        1,
        0
      ]
    }
  ]
};
