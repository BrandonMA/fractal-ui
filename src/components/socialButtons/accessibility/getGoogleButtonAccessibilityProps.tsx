export function getGoogleButtonAccessibilityProps(pressed?: boolean, disabled?: boolean): Record<string, any> {
    return {
        role: 'button',
        'aria-pressed': pressed,
        'aria-disabled': disabled,
        'aria-label': 'Google'
    };
}
