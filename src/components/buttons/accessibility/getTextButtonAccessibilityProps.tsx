export function getTextButtonAccessibilityProps(name?: string, pressed?: boolean): Record<string, any> {
    return {
        'aria-label': name,
        'aria-pressed': pressed
    };
}
