import { TabBarItemProps } from '../types/TabBarItemProps';
import { useMemo } from 'react';
import { getTabBarItemColorForState } from '../util/getTabBarItemColorForState';
import { useThemeColor } from '../../../../../ThemeState';

export function useTabBarItemColor(active: boolean, tabBarItemProps: TabBarItemProps): string {
    const { variant } = tabBarItemProps;
    const tabBarColor = useThemeColor('tabBarColor');
    const tabBarItemColor = useThemeColor('mainInteractiveColor');
    return useMemo(() => {
        return getTabBarItemColorForState(active, tabBarItemColor.base, tabBarColor.base200, variant);
    }, [active, variant, tabBarItemColor, tabBarColor]);
}
