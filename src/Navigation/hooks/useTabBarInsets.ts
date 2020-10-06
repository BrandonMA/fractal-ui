import { useMemo } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../components/TabNavigation/TabBar/types/TabBarPosition';

export function useTabBarInsets(position: TabBarPosition): EdgeInsets {
    return useMemo(() => {
        const insets = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };

        insets[position] = 60;

        return insets;
    }, [position]);
}
