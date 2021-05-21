import { LayoutRectangle, PlacementType } from '../types';

export function getNativePlacementOffsetStyle(
    anchorLayoutRectangle: LayoutRectangle,
    childLayoutRectangle: LayoutRectangle,
    placement: PlacementType
): {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    transform: Array<{ translateX: number } | { translateY: number }>;
} {
    if (placement == 'top') {
        return {
            right: anchorLayoutRectangle.width / 2,
            bottom: anchorLayoutRectangle.height,
            transform: [{ translateX: childLayoutRectangle.width / 2 }]
        };
    }
    if (placement == 'left') {
        return {
            right: anchorLayoutRectangle.width,
            bottom: anchorLayoutRectangle.height / 2,
            transform: [{ translateY: childLayoutRectangle.height / 2 }]
        };
    }
    if (placement == 'right') {
        return {
            left: anchorLayoutRectangle.width,
            bottom: anchorLayoutRectangle.height / 2,
            transform: [{ translateY: childLayoutRectangle.height / 2 }]
        };
    }
    return {
        right: anchorLayoutRectangle.width / 2,
        top: anchorLayoutRectangle.height,
        transform: [{ translateX: childLayoutRectangle.width / 2 }]
    };
}
