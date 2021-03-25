export function getWidth(percentage: number): string {
    return `${percentage}%`;
}

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

export function valueToPercent(value: number, min: number, max: number): number {
    return ((value - min) * 100) / (max - min);
}

export function percentToValue(percent: number, min: number, max: number): number {
    return ((max - min) / 100) * percent + min;
}

export function clampValue(value: number, min: number, max: number): number {
    if (value == null) return value;
    if (max < min) return value;
    return Math.min(Math.max(value, min), max);
}

export function getThumbProps(value: number, isDragging: boolean, min: number, max: number): Record<string, any> {
    return {
        role: 'slider',
        tabIndex: 0,
        'data-active': isDragging,
        'aria-valuetext': `${value}`,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-orientation': 'horizontal'
    };
}
