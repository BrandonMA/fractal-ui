import { LayoutRectangle, PlacementType } from '../types';

export function getNativePlacementOffsetStyle(
    anchorLayoutRectangle: LayoutRectangle,
    popoverLayoutRectangle: LayoutRectangle,
    placement: PlacementType
): {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    transform: Array<{ translateX: number } | { translateY: number }>;
} {
    const xValueVertical = anchorLayoutRectangle.x + anchorLayoutRectangle.width / 2;
    const yValueHorizontal = anchorLayoutRectangle.y + anchorLayoutRectangle.height / 2;

    if (placement == 'top') {
        return {
            right: xValueVertical,
            top: anchorLayoutRectangle.y - popoverLayoutRectangle.height,
            transform: [{ translateX: popoverLayoutRectangle.width / 2 }]
        };
    }
    if (placement == 'left') {
        return {
            left: anchorLayoutRectangle.x - popoverLayoutRectangle.width,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }]
        };
    }
    if (placement == 'right') {
        return {
            left: anchorLayoutRectangle.x + anchorLayoutRectangle.width,
            top: yValueHorizontal,
            transform: [{ translateY: -(popoverLayoutRectangle.height / 2) }]
        };
    }
    return {
        right: xValueVertical,
        top: anchorLayoutRectangle.y + anchorLayoutRectangle.height,
        transform: [{ translateX: popoverLayoutRectangle.width / 2 }]
    };
}
