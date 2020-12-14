import { useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { navigationBarInsetsAtom } from '../recoil/atoms/navigationBarInsetsAtom';
import { tabBarInsetsAtom } from '../recoil/atoms/tabBarInsetsAtom';

interface NavigationInsets {
    totalInsets: EdgeInsets;
    tabBarInsets: EdgeInsets;
    navigationBarInsets: EdgeInsets;
}

export function useNavigationInsets(): NavigationInsets {
    const insets = useSafeAreaInsets();
    const tabBarInsets = useRecoilValue(tabBarInsetsAtom);
    const navigationBarInsets = useRecoilValue(navigationBarInsetsAtom);

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
