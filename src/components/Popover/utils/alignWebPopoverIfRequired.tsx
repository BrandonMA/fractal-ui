import { PlacementOffsetStyle, PlacementType } from '../types';

export function alignWebPopoverIfRequired(
    style: PlacementOffsetStyle,
    anchorElement: HTMLDivElement,
    popoverWidth: number,
    popoverHeight: number,
    placement: PlacementType
): PlacementOffsetStyle {
    const finalPopoverWidth = placement == 'top' || placement == 'bottom' ? popoverWidth / 2 : popoverWidth;
    const finalPopoverHeight = placement == 'top' || placement == 'bottom' ? popoverWidth : popoverWidth / 2;
    const offsetHeight = anchorElement.offsetHeight;
    const offsetWidth = anchorElement.offsetWidth;
    const offsetTop = anchorElement.offsetTop;
    const offsetLeft = anchorElement.offsetLeft;

    const isOverflowingRight: boolean = (style.left ? style.left : 0) + finalPopoverWidth > window.innerWidth;
    const isOverflowingLeft: boolean = (style.left ? style.left : 0) < 0;
    const isOverflowingTop: boolean = (style.top ? style.top : 0) - finalPopoverHeight < 0;
    const isOverflowingBottom: boolean = (style.top ? style.top : 0) + popoverHeight > window.innerHeight - 40;

    if (isOverflowingTop) {
        style = {
            left: style.left,
            top: offsetHeight,
            transform: style.transform
        };
    }

    if (isOverflowingBottom) {
        style = {
            left: style.left,
            top: offsetTop - popoverHeight,
            transform: style.transform
        };
    }

    if (isOverflowingLeft) {
        style = {
            left: offsetLeft + offsetWidth,
            top: style.top
        };
    }

    if (isOverflowingRight) {
        style = {
            left: offsetLeft - popoverWidth,
            top: style.top,
            transform: style.transform
        };
    }
    return style;
}
