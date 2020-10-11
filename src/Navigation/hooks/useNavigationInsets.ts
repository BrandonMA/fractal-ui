import { useContext } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationBarInsetsContext } from '../components';
import { TabBarInsetsContext } from '../components/TabNavigation/TabBarInsetsProvider';

interface NavigationInsets {
    totalInsets: EdgeInsets;
    tabBarInsets: EdgeInsets;
}

export function useNavigationInsets(): NavigationInsets {
    const insets = useSafeAreaInsets();
    const tabBarInsets = useContext(TabBarInsetsContext);
    const navigationBarInsets = useContext(NavigationBarInsetsContext);

    const totalInsets = {
        top: insets.top + navigationBarInsets.insets.top + tabBarInsets.insets.top,
        right: insets.right + navigationBarInsets.insets.right + tabBarInsets.insets.right,
        bottom: insets.bottom + navigationBarInsets.insets.bottom + tabBarInsets.insets.bottom,
        left: insets.left + navigationBarInsets.insets.left + tabBarInsets.insets.left
    };

    return {
        totalInsets,
        tabBarInsets: tabBarInsets.insets
    };
}
