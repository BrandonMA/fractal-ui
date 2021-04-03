export function getButtonGroupAccessibilityProps(): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'group',
        'aria-label': 'Button group',
    };
}