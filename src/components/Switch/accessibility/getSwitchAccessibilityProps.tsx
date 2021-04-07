export function getSwitchAccessibilityProps(checked?: boolean, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'switch',
        'aria-label': 'Switch',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
