export function getButtonAccessibilityProps(pressed?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'button',
        'aria-pressed': pressed
    };
}
