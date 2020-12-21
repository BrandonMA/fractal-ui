/* eslint-disable react-hooks/rules-of-hooks */
import { Platform } from 'react-native';
import { useThemeColor } from '../../../../../ThemeState';
import { useMemo } from 'react';
var emptyConfig = {};
export function usePlatformBarStyles() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        var navigationBarColor_1 = useThemeColor('navigationBarColor');
        var mainInteractiveColor_1 = useThemeColor('mainInteractiveColor');
        return useMemo(function () {
            return {
                backgroundColor: navigationBarColor_1.base,
                titleColor: navigationBarColor_1.base900,
                color: mainInteractiveColor_1.base
            };
        }, [navigationBarColor_1, mainInteractiveColor_1]);
    }
    else {
        return emptyConfig;
    }
}
//# sourceMappingURL=usePlatformBarStyles.js.map