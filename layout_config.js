// ===== 布局超参数（反应界面与反馈界面共用）=====
const LAYOUT_CONFIG = {
    ROW_GAP: 96,              // 行距：相邻特征行中心之间的垂直距离 (px)
    ROW_SPREADS: [60, 110, 145, 110, 60],  // 五行各自距中线的水平距离 (px)，从上到下
    CELL: 56,                 // 信息单元边长 (px)
    LABEL_W: 110,             // 中央特征标签区域宽度 (px)
    CITY_LABEL_HEIGHT: 28,    // City A/B 标签高度 (px)
    GAP_CITY_TO_FIRST_ROW: 48, // City 标签下缘 → 第一行特征中心的纵向距离 (px)
};

function rowSpread(fi, nRows) {
    const spreads = LAYOUT_CONFIG.ROW_SPREADS;
    if (spreads.length >= nRows) {
        return spreads[fi];
    }
    const t = nRows > 1 ? fi / (nRows - 1) : 0;
    const idx = t * (spreads.length - 1);
    const lo = Math.floor(idx);
    const hi = Math.min(lo + 1, spreads.length - 1);
    const w = idx - lo;
    return spreads[lo] * (1 - w) + spreads[hi] * w;
}

function computeArcLayout(nRows) {
    const { ROW_GAP, CELL, LABEL_W, CITY_LABEL_HEIGHT, GAP_CITY_TO_FIRST_ROW } = LAYOUT_CONFIG;
    const cx = window.innerWidth / 2;
    const blockH = CITY_LABEL_HEIGHT + GAP_CITY_TO_FIRST_ROW + (nRows - 1) * ROW_GAP + CELL / 2;
    const blockTop = (window.innerHeight - blockH) / 2;
    const cityLabelY = blockTop + CITY_LABEL_HEIGHT / 2;
    const firstRowY = blockTop + CITY_LABEL_HEIGHT + GAP_CITY_TO_FIRST_ROW;
    const rows = [];

    for (let fi = 0; fi < nRows; fi++) {
        const y = firstRowY + fi * ROW_GAP;
        const spread = rowSpread(fi, nRows);
        rows.push({
            fi,
            y,
            spread,
            leftX: cx - LABEL_W / 2 - spread - CELL,
            rightX: cx + LABEL_W / 2 + spread,
        });
    }

    const midIdx = Math.floor((nRows - 1) / 2);
    const midSpread = rowSpread(midIdx, nRows);
    return {
        cx,
        cy: firstRowY + (nRows - 1) * ROW_GAP / 2,
        blockTop,
        blockH,
        rows,
        cityLabelY,
        cityAX: cx - LABEL_W / 2 - midSpread - CELL / 2,
        cityBX: cx + LABEL_W / 2 + midSpread + CELL / 2,
        cell: CELL,
        labelW: LABEL_W,
    };
}
