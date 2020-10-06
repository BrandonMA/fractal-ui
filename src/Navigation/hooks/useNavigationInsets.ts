import { useContext } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarInsetsContext } from '../components/TabNavigation/TabBarInsetsProvider';

interface NavigationInsets {
    totalInsets: EdgeInsets;
    noSafeAreaInsets: EdgeInsets;
}

export function useNavigationInsets(): NavigationInsets {
    const insets = useSafeAreaInsets();
    const tabBarInsets = useContext(TabBarInsetsContext);

    const totalInsets = {
        top: insets.top + tabBarInsets.insets.top,
        right: insets.right + tabBarInsets.insets.right,
        bottom: insets.bottom + tabBarInsets.insets.bottom,
        left: insets.left + tabBarInsets.insets.left
    };

    const noSafeAreaInsets = {
        top: tabBarInsets.insets.top,
        right: tabBarInsets.insets.right,
        bottom: tabBarInsets.insets.bottom,
        left: tabBarInsets.insets.left
    };

    return {
        totalInsets,
        noSafeAreaInsets
    };
}
