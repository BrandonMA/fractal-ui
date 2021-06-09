import { Dimensions } from 'react-native';
import { NativePlacementOffsetStyle, LayoutRectangle, PlacementType } from '../types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export function alignNativePopoverIfRequired(
    style: NativePlacementOffsetStyle,
    anchorLayoutRectangle: LayoutRectangle,
    popoverLayoutRectangle: LayoutRectangle,
    placement: PlacementType
): NativePlacementOffsetStyle {
    const offsetPopoverWidth =
        placement == 'top' || placement == 'bottom' ? popoverLayoutRectangle.width / 2 : popoverLayoutRectangle.width;
    const offsetPopoverHeight = popoverLayoutRectangle.height;

    const isOverflowingRight: boolean = (style.left ? style.left : 0) + offsetPopoverWidth > screenWidth;
    const isOverflowingLeft: boolean = (style.left ? style.left : 0) - offsetPopoverWidth < 0;
    const isOverflowingTop: boolean = (style.top ? style.top : 0) - offsetPopoverHeight < 0;
    const isOverflowingBottom: boolean = (style.top ? style.top : 0) + offsetPopoverHeight > screenHeight;

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
