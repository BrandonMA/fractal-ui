import { getTabBarItemColorForState } from '../util/getTabBarItemColorForState';
import { useThemeColor } from '../../../../../ThemeState';
export function useTabBarItemColor(active, tabBarItemProps) {
    var variant = tabBarItemProps.variant;
    var tabBarColor = useThemeColor('tabBarColor');
    var tabBarItemColor = useThemeColor('mainInteractiveColor');
    return getTabBarItemColorForState(active, tabBarItemColor.base, tabBarColor.base200, variant);
}
//# sourceMappingURL=useTabBarItemColor.js.map