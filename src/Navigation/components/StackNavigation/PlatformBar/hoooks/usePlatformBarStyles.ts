import { Platform } from 'react-native';
import { useThemeColor } from '../../../../../ThemeState';
import { useMemo } from 'react';

const emptyConfig = {};

export function usePlatformBarStyles() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const navigationBarColor = useThemeColor('navigationBarColor');
        const mainInteractiveColor = useThemeColor('mainInteractiveColor');
        return useMemo(() => {
            return {
                backgroundColor: navigationBarColor.base,
                titleColor: navigationBarColor.base900,
                color: mainInteractiveColor.base
            };
        }, [navigationBarColor, mainInteractiveColor]);
    } else {
        return emptyConfig;
    }
}
