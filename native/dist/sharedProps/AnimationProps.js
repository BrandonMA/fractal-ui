export function isAnimationContent(value) {
    var casted = value;
    return (casted != null &&
        (casted.opacity != null ||
            casted.width != null ||
            casted.height != null ||
            casted.scale != null ||
            casted.rotate != null ||
            casted.backgroundColor != null ||
            casted.translateY != null ||
            casted.backdropFilter != null));
}
//# sourceMappingURL=AnimationProps.js.map