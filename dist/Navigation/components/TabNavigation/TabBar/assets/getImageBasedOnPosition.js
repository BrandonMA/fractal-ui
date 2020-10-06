export function getImageBasedOnPosition(position) {
    if (position === 'top') {
        return require("../assets/middle-top.png");
    }
    else if (position === 'right') {
        return require("../assets/middle-right.png");
    }
    else if (position === 'left') {
        return require("../assets/middle-left.png");
    }
    else {
        return require("../assets/middle-bottom.png");
    }
}
//# sourceMappingURL=getImageBasedOnPosition.js.map