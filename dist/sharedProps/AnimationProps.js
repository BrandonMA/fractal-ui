export function isAnimationContent(value) {
    var casted = value;
    return (casted != null &&
        (casted.opacity != null ||
            casted.width != null ||
            casted.height != null ||
            casted.scale != null ||
            casted.rotate != null ||
            casted.backgroundColor != null ||
            casted.translateY != null));
}
export var emptyAnimationContent = {
    opacity: undefined,
    width: undefined,
    height: undefined,
    scale: 1,
    rotate: undefined,
    backgroundColor: undefined,
    translateY: undefined
};
//# sourceMappingURL=AnimationProps.js.map