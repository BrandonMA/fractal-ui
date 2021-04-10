export function getFacebookButtonAccessibilityProps(pressed?: boolean, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'button',
        'aria-pressed': pressed,
        'aria-disabled': disabled,
        'aria-label': 'Facebook'
    };
}
