export function getWidth(percentage) {
    return `${percentage}%`;
}
export function getPercentage(current, min, max) {
    return ((current - min) / (max - min)) * 100;
}
export function getLeft(percentage) {
    return `calc(${percentage}% - 10px)`;
}
export function toPrecision(value, precision) {
    let nextValue = value;
    const scaleFactor = Math.pow(10, (precision !== null && precision !== void 0 ? precision : 10));
    nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
    return precision ? nextValue.toFixed(precision) : nextValue;
}
export function countDecimalPlaces(value) {
    if (!Number.isFinite(value))
        return 0;
    let e = 1;
    let p = 0;
    while (Math.round(value * e) / e !== value) {
        e *= 10;
        p += 1;
    }
    return p;
}
export function roundValueToStep(value, from, step) {
    const nextValue = Math.round((value - from) / step) * step + from;
    const precision = countDecimalPlaces(step);
    return toPrecision(nextValue, precision);
}
export function valueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min);
}
export function percentToValue(percent, min, max) {
    return ((max - min) / 100) * percent + min;
}
export function clampValue(value, min, max) {
    if (value == null)
        return value;
    if (max <= min)
        return value;
    return Math.min(Math.max(value, min), max);
}
//# sourceMappingURL=slider.js.map