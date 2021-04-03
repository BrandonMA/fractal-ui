export function getColorAccessibilityProps(checked: boolean, color: string, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'button',
        'aria-checked': checked,
        'aria-disabled': disabled,
        'aria-label': 'Color Picker ' + color
    };
}