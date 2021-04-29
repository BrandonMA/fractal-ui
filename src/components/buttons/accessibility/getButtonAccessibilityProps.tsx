export function getButtonAccessibilityProps(pressed?: boolean, type?: string, disabled?: boolean): Record<string, any> {
    if (type === 'switch') {
        return {
            'aria-disabled': disabled
        };
    } else {
        return {
            role: 'button',
            'aria-pressed': pressed,
            'aria-disabled': disabled
        };
    }
}
