import { MutableRefObject } from 'react';
import { PlacementOffsetStyle, PlacementType } from '../types/types';
import { alignWebPopoverIfRequired } from './alignWebPopoverIfRequired';

export function getWebPlacementOffsetStyle(
    anchorRef: MutableRefObject<HTMLDivElement | undefined>,
    popoverRef: MutableRefObject<HTMLDivElement | undefined>,
    placement: PlacementType
): PlacementOffsetStyle | undefined {
    let style: PlacementOffsetStyle = {};

    if (anchorRef.current && popoverRef.current) {
        const offsetHeight = anchorRef.current.offsetHeight;
        const offsetWidth = anchorRef.current.offsetWidth;
        if (placement == 'bottom') {
            style = {
                right: offsetWidth / 2,
                top: offsetHeight,
                transform: 'translateX(50%)'
            };
        }
        if (placement === 'top') {
            style = {
                right: offsetWidth / 2,
                bottom: offsetHeight,
                transform: 'translateX(50%)'
            };
        }
        if (placement === 'left') {
            style = {
                right: offsetWidth,
                bottom: offsetHeight / 2,
                transform: 'translateY(50%)'
            };
        }
        if (placement == 'right') {
            style = {
                left: offsetWidth,
                bottom: offsetHeight / 2,
                transform: 'translateY(50%)'
            };
        }
        style = alignWebPopoverIfRequired(style, anchorRef.current, popoverRef.current);
        return style;
    }
    return undefined;
}
