export function getNativePlacementOffsetStyle(anchorLayoutRectangle, popoverLayoutRectangle, placement) {
    const anchorWidth = anchorLayoutRectangle.width;
    const xValueVertical = anchorLayoutRectangle.x + anchorWidth / 2;
    const yValueHorizontal = anchorLayoutRectangle.y + anchorLayoutRectangle.height / 2;
    const popoverWidth = popoverLayoutRectangle.width;
    if (placement == 'top') {
        return {
            right: xValueVertical,
            top: anchorLayoutRectangle.y - popoverLayoutRectangle.height,
            transform: [{ translateX: popoverWidth / 2 }],
            width: anchorWidth
        };
    }
    if (placement == 'left') {
        return {
            left: anchorLayoutRectangle.x - popoverWidth,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }],
            width: anchorWidth
        };
    }
    if (placement == 'right') {
        return {
            left: anchorLayoutRectangle.x + anchorWidth,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }],
            width: anchorWidth
        };
    }
    return {
        right: xValueVertical,
        top: anchorLayoutRectangle.y + anchorLayoutRectangle.height,
        transform: [{ translateX: popoverWidth / 2 }],
        width: anchorWidth
    };
}
//# sourceMappingURL=getNativePlacementOffsetStyle.js.map