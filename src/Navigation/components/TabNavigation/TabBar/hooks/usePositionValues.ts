import { TabBarPosition } from '../types/TabBarPosition';
import { constants } from '../../../../constants';
import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';

interface PositionValue {
    tabBarWidth: string;
    tabBarHeight: string;
    flexDirection: 'row' | 'column';
    side: string;
}

export function usePositionValues(tabBarPosition: TabBarPosition, safeAreaInsets: EdgeInsets): PositionValue {
    const size = () => {
        switch (tabBarPosition) {
            case 'right':
                return safeAreaInsets.right + constants.tabBarWidth;
            case 'left':
                return safeAreaInsets.left + constants.tabBarWidth;
            case 'bottom':
                return safeAreaInsets.bottom + constants.tabBarHeight;
        }
    };
    const constantSize = `${size()}px`;
    const width = getValueForTabBarPosition(tabBarPosition, '100%', constantSize, constantSize);
    const height = getValueForTabBarPosition(tabBarPosition, constantSize, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const side = getValueForTabBarPosition(tabBarPosition, 'bottom: 0px', 'left: 0px', 'right: 0px');

    return useMemo(() => {
        return { tabBarWidth: width, tabBarHeight: height, flexDirection, side };
    }, [width, height, flexDirection, side]);
}
