import { TabBarPosition } from '../types/TabBarPosition';
import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';

interface PositionValue {
    tabBarWidth: string;
    tabBarHeight: string;
    flexDirection: 'row' | 'column';
    side: string;
}

export function usePositionValues(tabBarPosition: TabBarPosition): PositionValue {
    const safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    const constantSize = `${safeArea}px`;
    const width = getValueForTabBarPosition(tabBarPosition, '100%', constantSize, constantSize);
    const height = getValueForTabBarPosition(tabBarPosition, constantSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const side = getValueForTabBarPosition(tabBarPosition, 'bottom: 0px', 'left: 0px', 'right: 0px');

    return useMemo(() => {
        return { tabBarWidth: width, tabBarHeight: height, flexDirection, side };
    }, [width, height, flexDirection, side]);
}
