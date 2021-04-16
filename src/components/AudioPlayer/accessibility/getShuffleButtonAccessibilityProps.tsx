export function getShuffleButtonAccessibilityProps(pressed: boolean, disabled?: boolean): Record<string, any> {
    return {
        'aria-label': 'Shuffle',
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
