import { MutableRefObject } from 'react';
import { PlacementType } from '../types';

const flipSign = (x: number) => x * -1;

export function getElementViewportOffset(
    element: HTMLDivElement,
    offset = 0
): {
    top: number;
    bottom: number;
    left: number;
    right: number;
} {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top - offset,
        bottom: flipSign(rect.bottom - window.innerHeight) - offset,
        left: rect.left - offset,
        right: flipSign(rect.right - window.innerWidth) - offset
    };
}

export function getWebPlacementOffsetStyle(
    anchorRef: MutableRefObject<HTMLDivElement | undefined>,
    //popoverRef: MutableRefObject<HTMLDivElement | undefined>,
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

    if (anchorRef.current /*&& popoverRef.current*/) {
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
                //width: offsetWidth,
                transform: 'translateX(50%)'
            };
        }
        if (placement === 'left') {
            style = {
                right: offsetWidth,
                bottom: offsetHeight / 2,
                //width: offsetWidth,
                transform: 'translateY(50%)'
            };
        }
        if (placement == 'right') {
            style = {
                left: offsetWidth,
                bottom: offsetHeight / 2,
                //width: offsetWidth,
                transform: 'translateY(50%)'
            };
        }
        /*const offset = getElementViewportOffset(anchorRef.current, 10);
        const popoverOffsetWidth = popoverRef.current.offsetWidth;

        const isOverflowingRight = offset.left + popoverOffsetWidth > window.innerWidth;

        console.log({ offset: offset.left, popoverOffsetWidth, windowInnerWidth: window.innerWidth });

        console.log({ isOverflowingRight });
        console.log({ style });
        if (isOverflowingRight) {
            style.right = -300;
        }

        console.log({ newstyle: style });*/

        return style;
    }
    return undefined;
}
