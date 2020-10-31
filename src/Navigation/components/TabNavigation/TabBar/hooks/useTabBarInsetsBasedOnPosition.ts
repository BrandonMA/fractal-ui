import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../types/TabBarPosition';
import { useMemo } from 'react';

export function useTabBarInsetsBasedOnPosition(position: TabBarPosition, hidden?: boolean): EdgeInsets {
    return useMemo(() => {
        const insets = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };

        insets[position] = hidden ? 0 : 60;

        return insets;
    }, [position, hidden]);
}
