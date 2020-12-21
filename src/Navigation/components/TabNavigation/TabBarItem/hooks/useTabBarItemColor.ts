import { TabBarItemProps } from '../types/TabBarItemProps';
import { getTabBarItemColorForState } from '../util/getTabBarItemColorForState';
import { useThemeColor } from '../../../../../ThemeState';

export function useTabBarItemColor(active: boolean, tabBarItemProps: TabBarItemProps): string {
    const { variant } = tabBarItemProps;
    const tabBarColor = useThemeColor('tabBarColor');
    const tabBarItemColor = useThemeColor('mainInteractiveColor');
    return getTabBarItemColorForState(active, tabBarItemColor.base, tabBarColor.base200, variant);
}
