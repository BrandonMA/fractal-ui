export function getNextButtonAccessibilityProps(disabled?: boolean): Record<string, any> {
    return {
        'aria-label': 'Next',
        'aria-disabled': disabled
    };
}
