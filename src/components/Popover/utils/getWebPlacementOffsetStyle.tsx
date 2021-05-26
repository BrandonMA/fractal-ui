import { MutableRefObject } from 'react';
import { PlacementType } from '../types';

export function getWebPlacementOffsetStyle(
    anchorRef: MutableRefObject<HTMLDivElement | undefined>,
    placement: PlacementType
):
    | {
          left?: number;
          right?: number;
          top?: number;
          bottom?: number;
          transform: string;
          width?: number;
      }
    | undefined {
    let style: { left?: number; right?: number; top?: number; bottom?: number; transform: string; width?: number } = {
        transform: ''
    };

    if (anchorRef.current) {
        const offsetHeight = anchorRef.current.offsetHeight;
        const offsetWidth = anchorRef.current.offsetWidth;
        if (placement == 'bottom') {
            style = {
                right: offsetWidth / 2,
                top: offsetHeight,
                width: offsetWidth,
                transform: 'translateX(50%)'
            };
        }
        if (placement === 'top') {
            style = {
                right: offsetWidth / 2,
                bottom: offsetHeight,
                width: offsetWidth,
                transform: 'translateX(50%)'
            };
        }
        if (placement === 'left') {
            style = {
                right: offsetWidth,
                bottom: offsetHeight / 2,
                width: offsetWidth,
                transform: 'translateY(50%)'
            };
        }
        if (placement == 'right') {
            style = {
                left: offsetWidth,
                bottom: offsetHeight / 2,
                width: offsetWidth,
                transform: 'translateY(50%)'
            };
        }
        return style;
    }
    return undefined;
}
