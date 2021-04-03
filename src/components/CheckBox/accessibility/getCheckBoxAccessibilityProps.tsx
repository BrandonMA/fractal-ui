export function getCheckBoxAccessibilityProps(checked: boolean, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'checkbox',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}