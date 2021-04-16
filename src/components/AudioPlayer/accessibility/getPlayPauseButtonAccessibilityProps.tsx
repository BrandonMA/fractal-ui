export function getPlayPauseButtonAccessibilityProps(pressed: boolean, disabled?: boolean): Record<string, any> {
    return {
        'aria-label': 'Play Pause',
        'aria-pressed': pressed,
        'aria-disabled': disabled
    };
}
