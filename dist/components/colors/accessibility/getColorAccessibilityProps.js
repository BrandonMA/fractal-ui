export function getColorAccessibilityProps(checked, color, disabled) {
    return {
        role: 'button',
        'aria-pressed': checked,
        'aria-disabled': disabled,
        'aria-label': 'Color Picker ' + color
    };
}
//# sourceMappingURL=getColorAccessibilityProps.js.map