import { constants } from '../../../../constants';
import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
export function usePositionValues(tabBarPosition, safeAreaInsets) {
    var size = function () {
        switch (tabBarPosition) {
            case 'right':
                return safeAreaInsets.right + constants.tabBarWidth;
            case 'left':
                return safeAreaInsets.left + constants.tabBarWidth;
            case 'bottom':
                return safeAreaInsets.bottom + constants.tabBarHeight;
        }
    };
    var constantSize = size() + "px";
    var width = getValueForTabBarPosition(tabBarPosition, '100%', constantSize, constantSize);
    var height = getValueForTabBarPosition(tabBarPosition, constantSize, '100%', '100%');
    var flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    var side = getValueForTabBarPosition(tabBarPosition, 'bottom: 0px', 'left: 0px', 'right: 0px');
    return useMemo(function () {
        return { tabBarWidth: width, tabBarHeight: height, flexDirection: flexDirection, side: side };
    }, [width, height, flexDirection, side]);
}
//# sourceMappingURL=usePositionValues.js.map