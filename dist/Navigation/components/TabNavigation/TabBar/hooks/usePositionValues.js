import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';
export function usePositionValues(tabBarPosition) {
    var safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    var constantSize = safeArea + "px";
    var width = getValueForTabBarPosition(tabBarPosition, '100%', constantSize, constantSize);
    var height = getValueForTabBarPosition(tabBarPosition, constantSize, '100%', '100%');
    var flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    var side = getValueForTabBarPosition(tabBarPosition, 'bottom: 0px', 'left: 0px', 'right: 0px');
    return useMemo(function () {
        return { tabBarWidth: width, tabBarHeight: height, flexDirection: flexDirection, side: side };
    }, [width, height, flexDirection, side]);
}
//# sourceMappingURL=usePositionValues.js.map