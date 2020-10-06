import { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarInsetsContext } from '../components/TabNavigation/TabBarInsetsProvider';
export function useNavigationInsets() {
    var insets = useSafeAreaInsets();
    var tabBarInsets = useContext(TabBarInsetsContext);
    var totalInsets = {
        top: insets.top + tabBarInsets.insets.top,
        right: insets.right + tabBarInsets.insets.right,
        bottom: insets.bottom + tabBarInsets.insets.bottom,
        left: insets.left + tabBarInsets.insets.left
    };
    var noSafeAreaInsets = {
        top: tabBarInsets.insets.top,
        right: tabBarInsets.insets.right,
        bottom: tabBarInsets.insets.bottom,
        left: tabBarInsets.insets.left
    };
    return {
        totalInsets: totalInsets,
        noSafeAreaInsets: noSafeAreaInsets
    };
}
//# sourceMappingURL=useNavigationInsets.js.map