import { MutableRefObject } from 'react';
import { PlacementType } from '../types';
export declare function getWebPlacementOffsetStyle(anchorElementRef: MutableRefObject<HTMLDivElement | undefined>, placement: PlacementType): {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    transform: string;
    width: number;
} | undefined;
