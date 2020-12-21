import { useNavigationInsets, usePresentationType } from '../../Navigation/hooks';
import { Platform } from 'react-native';
import { useMemo } from 'react';
export function useScrollViewProps() {
    var _a = useNavigationInsets(), totalInsets = _a.totalInsets, tabBarInsets = _a.tabBarInsets;
    var presentationType = usePresentationType();
    return useMemo(function () {
        return {
            automaticallyAdjustContentInsets: true,
            contentInsetAdjustmentBehavior: 'scrollableAxes',
            contentInset: { bottom: tabBarInsets.bottom },
            scrollIndicatorInsets: { bottom: tabBarInsets.bottom },
            contentContainerStyle: Platform.OS === 'ios'
                ? null
                : {
                    paddingTop: totalInsets.top,
                    paddingBottom: presentationType === 'modal' ? 0 : totalInsets.bottom,
                    paddingRight: 0,
                    paddingLeft: 0
                }
        };
    }, [totalInsets, tabBarInsets, presentationType]);
}
//# sourceMappingURL=useScrollViewProps.js.map