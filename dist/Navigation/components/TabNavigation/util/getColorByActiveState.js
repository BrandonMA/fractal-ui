export function getColorByActiveState(active, activeColor, inactiveColor, variant) {
    if (variant === 'circular') {
        return '#FFFFFF';
    }
    else {
        var finalActiveColor = activeColor !== null && activeColor !== void 0 ? activeColor : '#1281FF';
        var finalInactiveColor = inactiveColor !== null && inactiveColor !== void 0 ? inactiveColor : '#999999';
        return active ? finalActiveColor : finalInactiveColor;
    }
}
//# sourceMappingURL=getColorByActiveState.js.map