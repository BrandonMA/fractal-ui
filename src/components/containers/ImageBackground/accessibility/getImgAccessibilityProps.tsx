export function getImgAccessibilityProps(): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'img',
        'aria-label': 'Background image'
    };
}
