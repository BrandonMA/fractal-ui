export function getRepeatButtonAccessibilityProps(pressed: boolean, disabled?: boolean): Record<string, any> {
    return {
        'aria-label': 'Repeat',
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
