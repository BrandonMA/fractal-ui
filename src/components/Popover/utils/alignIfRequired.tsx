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

// This assumes the element is inside a relatively positioned parent
export default function alignIfRequired(anchor: HTMLDivElement, child: HTMLDivElement): void {
    const offset = getElementViewportOffset(anchor, 10);

    console.log({ offset: offset.left, childOffsetWidth: 300, windowInnerWidth: window.innerWidth });

    const isOverflowingRight = offset.left + child.offsetWidth > window.innerWidth - 30;
    const isOverflowingBottom = offset.top + child.offsetHeight > window.innerHeight - 30;

    const horizontal = isOverflowingRight ? 'right' : 'left';
    const vertical = isOverflowingBottom ? 'bottom' : 'top';

    // Reset
    /*
    child.style.top = '';
    child.style.bottom = '';
    child.style.left = '';
    child.style.right = '';

    child.style[horizontal] = '0px';
    child.style[vertical] = `${anchor.offsetHeight}px`;*/
}
