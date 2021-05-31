import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
export function alignNativePopoverIfRequired(style, anchorLayoutRectangle, popoverLayoutRectangle, placement) {
    const offsetPopoverWidth = placement == 'top' || placement == 'bottom' ? popoverLayoutRectangle.width / 2 : popoverLayoutRectangle.width;
    const offsetPopoverHeight = popoverLayoutRectangle.height;
    const isOverflowingRight = (style.left ? style.left : 0) + offsetPopoverWidth > screenWidth;
    const isOverflowingLeft = (style.left ? style.left : 0) - offsetPopoverWidth < 0;
    const isOverflowingTop = (style.top ? style.top : 0) - offsetPopoverHeight < 0;
    const isOverflowingBottom = (style.top ? style.top : 0) + offsetPopoverHeight > screenHeight;
    if (isOverflowingTop) {
        style = {
            left: style.left,
            top: anchorLayoutRectangle.y + anchorLayoutRectangle.height,
            transform: style.transform
        };
    }
    if (isOverflowingBottom) {
        style = {
            left: style.left,
            top: anchorLayoutRectangle.y - popoverLayoutRectangle.height,
            transform: style.transform
        };
    }
    if (isOverflowingLeft) {
        style = {
            left: 0,
            top: style.top
        };
    }
    if (isOverflowingRight) {
        style = {
            right: 0,
            top: style.top
        };
    }
    return style;
}
//# sourceMappingURL=alignNativePopoverIfRequired.js.map