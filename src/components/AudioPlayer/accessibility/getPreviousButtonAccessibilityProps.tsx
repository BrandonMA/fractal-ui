export function getPreviousButtonAccessibilityProps(disabled?: boolean): Record<string, any> {
    return {
        'aria-label': 'Previous',
        'aria-disabled': disabled
    };
}
