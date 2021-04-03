export function getTextButtonAccessibilityProps(name?: string, pressed?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': name,
        'aria-pressed': pressed
    };
}