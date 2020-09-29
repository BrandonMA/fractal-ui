export function getAbsolutePosition(position, value) {
    if (value === void 0) { value = 0; }
    var finalPosition = position !== null && position !== void 0 ? position : 'bottom';
    return finalPosition + ": " + value + "px";
}
//# sourceMappingURL=getAbsolutePosition.js.map