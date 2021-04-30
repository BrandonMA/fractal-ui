export function getButtonAccessibilityProps(pressed, type, disabled) {
    if (type === 'switch') {
        return {
            'aria-disabled': disabled
        };
    }
    else {
        return {
            role: 'button',
            'aria-pressed': pressed,
            'aria-disabled': disabled
        };
    }
}
//# sourceMappingURL=getButtonAccessibilityProps.js.map