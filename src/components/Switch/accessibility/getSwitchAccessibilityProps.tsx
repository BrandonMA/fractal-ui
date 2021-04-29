export function getSwitchAccessibilityProps(checked?: boolean): Record<string, any> {
    return {
        role: 'switch',
        'aria-label': 'Switch',
        'aria-checked': checked
    };
}
