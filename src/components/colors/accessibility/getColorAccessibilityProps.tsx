export function getColorAccessibilityProps(checked: boolean, color: string, disabled?: boolean): Record<string, any> {
    return {
        role: 'button',
        'aria-pressed': checked,
        'aria-disabled': disabled,
        'aria-label': 'Color Picker ' + color
    };
}
