export function getSliderAccessibilityProps(value: number, isDragging: boolean, min: number, max: number, disabled?: boolean): Record<string, any> {
    return {
        role: 'slider',
        tabIndex: 0,
        'data-active': isDragging,
        'aria-valuetext': `${value}`,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-orientation': 'horizontal',
        'aria-disabled': disabled
    };
}
