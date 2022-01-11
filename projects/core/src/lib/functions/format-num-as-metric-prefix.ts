export const formatNumAsMetricPrefix = (num: number): string => {
    const ranges = [
        { divider: 1e18, suffix: 'P' },
        { divider: 1e15, suffix: 'E' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' },
    ];
    for (let i = 0; i < ranges.length; i++) {
        if (num >= ranges[i].divider) {
            return _formatNumString(num / ranges[i].divider) + ranges[i].suffix;
        }
    }

    return _formatNumString(num);
}

export const _formatNumString = (num: number): string => {
    return (Number(num.toFixed(2)) / 1).toString(); // 1 to remove trailing zeros
}