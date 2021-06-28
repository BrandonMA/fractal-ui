import { PlacementOffsetStyle, PlacementType } from '../types';

const flipSign = (x: number) => x * -1;

function getElementViewportOffset(
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

export function alignWebPopoverIfRequired(
    style: PlacementOffsetStyle,
    anchorElement: HTMLDivElement,
    popoverWidth: number,
    popoverHeight: number,
    placement: PlacementType
): PlacementOffsetStyle {
    const offsetHeight = anchorElement.offsetHeight;
    const offsetWidth = anchorElement.offsetWidth;
    const offset = getElementViewportOffset(anchorElement, 0);

    const isVertical = placement === 'top' || placement === 'bottom';

    const offsetPopoverWidth = isVertical ? popoverWidth / 2 : popoverWidth;
    const offsetPopoverHeight = isVertical ? popoverHeight : popoverHeight / 2;

    const isOverflowingRight = offset.left + offsetWidth / 2 + offsetPopoverWidth > window.innerWidth;
    const isOverflowingLeft = offset.right + offsetWidth / 2 + offsetPopoverWidth > window.innerWidth;
    const isOverflowingBottom = offset.top + (isVertical ? offsetHeight : offsetHeight / 2) + offsetPopoverHeight > window.innerHeight;
    const isOverflowingTop = offset.bottom + (isVertical ? offsetHeight : offsetHeight / 2) + offsetPopoverHeight > window.innerHeight;

    if (isOverflowingRight) {
        style.left = undefined;
        style.right = isVertical ? 0 : offsetWidth;
        if (isVertical) {
            style.transform = undefined;
        }
    }
    if (isOverflowingLeft) {
        style.left = isVertical ? 0 : offsetWidth;
        if (isVertical) {
            style.transform = undefined;
        }
    }
    if (isOverflowingBottom) {
        style.top = undefined;
        style.bottom = offsetHeight;
        style.transform = undefined;
    }
    if (isOverflowingTop) {
        style.top = offsetHeight;
        style.transform = undefined;
    }
    return style;
}
