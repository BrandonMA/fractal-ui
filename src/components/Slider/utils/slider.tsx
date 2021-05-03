export function getPercentage(current: number, min: number, max: number): number {
    return ((current - min) / (max - min)) * 100;
}

export function getLeft(percentage: number): string {
    return `calc(${percentage}% - 10px)`;
}

export function toPrecision(value: number, precision?: number): string | number {
    let nextValue = value;
    const scaleFactor = 10 ** (precision ?? 10);
    nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
    return precision ? nextValue.toFixed(precision) : nextValue;
}

export function countDecimalPlaces(value: number): number {
    if (!Number.isFinite(value)) return 0;

    let e = 1;
    let p = 0;
    while (Math.round(value * e) / e !== value) {
        e *= 10;
        p += 1;
    }
    return p;
}

export function roundValueToStep(value: number, from: number, step: number): string | number {
    const nextValue = Math.round((value - from) / step) * step + from;
    const precision = countDecimalPlaces(step);
    return toPrecision(nextValue, precision);
}

export function valueToPercentage(value: number, min: number, max: number): number {
    return ((value - min) * 100) / (max - min);
}

export function percentageToValue(percentage: number, min: number, max: number): number {
    return ((max - min) / 100) * percentage + min;
}

export function clamp(value: number, minValue: number, maxValue: number): number {
    if (maxValue <= minValue) return value;
    const higherMinimumValue = Math.max(value, minValue);
    return Math.min(higherMinimumValue, maxValue);
}
