export function getValueBasedOnTabBarPosition(horizontal, vertical, position) {
    if (position === 'right' || position === 'left') {
        return vertical;
    }
    else {
        return horizontal;
    }
}
//# sourceMappingURL=getValueBasedOnTabBarPosition.js.map