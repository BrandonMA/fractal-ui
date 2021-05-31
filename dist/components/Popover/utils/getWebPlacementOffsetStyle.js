import { alignWebPopoverIfRequired } from './alignWebPopoverIfRequired';
export function getWebPlacementOffsetStyle(anchorRef, popoverRef, placement) {
    let style = {};
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
//# sourceMappingURL=getWebPlacementOffsetStyle.js.map