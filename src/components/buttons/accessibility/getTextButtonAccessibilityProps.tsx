export function getTextButtonAccessibilityProps(name?: string): Record<string, any> {
    return {
        'aria-label': name
    };
}
