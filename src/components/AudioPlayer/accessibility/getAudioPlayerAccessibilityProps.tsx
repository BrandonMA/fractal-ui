export function getAudioPlayerAccessibilityProps(disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        'aria-label': 'Audio Player',
        'aria-disabled': disabled
    };
}
