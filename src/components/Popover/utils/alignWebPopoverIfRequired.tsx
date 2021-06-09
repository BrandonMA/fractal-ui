import { PlacementOffsetStyle } from '../types';

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
    popoverElement: HTMLDivElement
): PlacementOffsetStyle {
    const offsetHeight = anchorElement.offsetHeight;
    const offset = getElementViewportOffset(anchorElement, 0);
    const popoverOffsetWidth = popoverElement.offsetWidth;
    const popoverOffsetHeight = popoverElement.offsetHeight;

    const isOverflowingRight = offset.left + popoverOffsetWidth > window.innerWidth;
    const isOverflowingLeft = offset.right + popoverOffsetWidth > window.innerWidth;
    const isOverflowingBottom = offset.top + popoverOffsetHeight > window.innerHeight - 40;
    const isOverflowingTop = offset.bottom + popoverOffsetHeight > window.innerHeight - 40;

    if (isOverflowingRight) {
        style.right = 0;
        style.transform = undefined;
    }
    if (isOverflowingLeft) {
        style.left = 0;
        style.transform = undefined;
    }
    if (isOverflowingBottom) {
        style.top = undefined;
        style.bottom = offsetHeight;
    }
    if (isOverflowingTop) {
        style.bottom = undefined;
        style.top = offsetHeight;
    }
    return style;
}
