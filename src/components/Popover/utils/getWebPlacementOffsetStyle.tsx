import { MutableRefObject } from 'react';
import { PlacementType } from '../types';

export function getWebPlacementOffsetStyle(
    anchorElementRef: MutableRefObject<HTMLDivElement | undefined>,
    placement: PlacementType
):
    | {
          left?: number;
          right?: number;
          top?: number;
          bottom?: number;
          transform: string;
          width: number;
      }
    | undefined {
    if (anchorElementRef.current) {
        const offsetHeight = anchorElementRef.current.offsetHeight;
        const offsetWidth = anchorElementRef.current.offsetWidth;
        if (placement == 'bottom') {
            return {
                right: offsetWidth / 2,
                top: offsetHeight,
                transform: 'translateX(50%)',
                width: offsetWidth
            };
        }
        if (placement === 'top') {
            return {
                right: offsetWidth / 2,
                bottom: offsetHeight,
                transform: 'translateX(50%)',
                width: offsetWidth
            };
        }
        if (placement === 'left') {
            return {
                right: offsetWidth,
                bottom: offsetHeight / 2,
                transform: 'translateY(50%)',
                width: offsetWidth
            };
        }
        if (placement == 'right') {
            return {
                left: offsetWidth,
                bottom: offsetHeight / 2,
                transform: 'translateY(50%)',
                width: offsetWidth
            };
        }
    }
    return undefined;
}
