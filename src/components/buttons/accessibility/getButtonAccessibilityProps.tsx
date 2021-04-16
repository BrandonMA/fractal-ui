export function getButtonAccessibilityProps(pressed?: boolean): Record<string, any> {
    return {
        role: 'button',
        'aria-pressed': pressed
    };
}
