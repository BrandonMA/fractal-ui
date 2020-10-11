import { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationBarInsetsContext } from '../components';
import { TabBarInsetsContext } from '../components/TabNavigation/TabBarInsetsProvider';
export function useNavigationInsets() {
    var insets = useSafeAreaInsets();
    var tabBarInsets = useContext(TabBarInsetsContext);
    var navigationBarInsets = useContext(NavigationBarInsetsContext);
    var totalInsets = {
        top: insets.top + navigationBarInsets.insets.top + tabBarInsets.insets.top,
        right: insets.right + navigationBarInsets.insets.right + tabBarInsets.insets.right,
        bottom: insets.bottom + navigationBarInsets.insets.bottom + tabBarInsets.insets.bottom,
        left: insets.left + navigationBarInsets.insets.left + tabBarInsets.insets.left
    };
    return {
        totalInsets: totalInsets,
        tabBarInsets: tabBarInsets.insets
    };
}
//# sourceMappingURL=useNavigationInsets.js.map