import { useContext, useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationBarInsetsContext } from '../components';
import { TabBarInsetsContext } from '../components/TabNavigation/TabBarInsetsProvider/TabBarInsetsProvider';

interface NavigationInsets {
    totalInsets: EdgeInsets;
    tabBarInsets: EdgeInsets;
    navigationBarInsets: EdgeInsets;
}

export function useNavigationInsets(): NavigationInsets {
    const insets = useSafeAreaInsets();
    const { tabBarInsets } = useContext(TabBarInsetsContext);
    const { navigationBarInsets } = useContext(NavigationBarInsetsContext);

    const totalInsets = useMemo(() => {
        return {
            top: insets.top + navigationBarInsets.top + tabBarInsets.top,
            right: insets.right + navigationBarInsets.right + tabBarInsets.right,
            bottom: insets.bottom + navigationBarInsets.bottom + tabBarInsets.bottom,
            left: insets.left + navigationBarInsets.left + tabBarInsets.left
        };
    }, [insets, navigationBarInsets, tabBarInsets]);

    return useMemo(() => {
        return {
            totalInsets,
            tabBarInsets,
            navigationBarInsets
        };
    }, [totalInsets, tabBarInsets, navigationBarInsets]);
}
