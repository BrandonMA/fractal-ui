import { LayoutRectangle, PlacementType } from '../types';
export declare function getNativePlacementOffsetStyle(anchorLayoutRectangle: LayoutRectangle, popoverLayoutRectangle: LayoutRectangle, placement: PlacementType): {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    transform: Array<{
        translateX: number;
    } | {
        translateY: number;
    }>;
    width: number;
};
