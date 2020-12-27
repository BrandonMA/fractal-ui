import { useNavigationInsets } from '../../Navigation/hooks';
import { Platform } from 'react-native';
import { useMemo } from 'react';
export function useSafeAreaScrollViewProps() {
    var _a = useNavigationInsets(), totalInsets = _a.totalInsets, tabBarInsets = _a.tabBarInsets;
    return useMemo(function () {
        return {
            automaticallyAdjustContentInsets: false,
            contentInsetAdjustmentBehavior: 'scrollableAxes',
            contentInset: { bottom: tabBarInsets.bottom },
            scrollIndicatorInsets: { bottom: tabBarInsets.bottom },
            contentContainerStyle: Platform.OS === 'ios'
                ? null
                : {
                    paddingTop: 0,
                    paddingBottom: totalInsets.bottom,
                    paddingRight: 0,
                    paddingLeft: 0
                }
        };
    }, [totalInsets, tabBarInsets]);
}
//# sourceMappingURL=useSafeAreaScrollViewProps.js.map