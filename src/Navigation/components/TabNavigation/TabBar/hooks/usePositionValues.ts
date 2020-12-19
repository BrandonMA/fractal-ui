import { TabBarPosition } from '../types/TabBarPosition';
import { constants } from '../../../../constants';
import { getValueForPosition } from '../util/getValueForPosition';
import { useMemo } from 'react';
import { TabBarSideStyle } from '../types/TabBarSideStyle';
import { EdgeInsets } from 'react-native-safe-area-context';

interface PositionValue {
    tabBarWidth: string;
    tabBarHeight: string;
    flexDirection: 'row' | 'column';
    side: TabBarSideStyle;
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
    const width = getValueForPosition(tabBarPosition, '100%', constantSize, constantSize);
    const height = getValueForPosition(tabBarPosition, constantSize, '100%', '100%');
    const flexDirection = getValueForPosition(tabBarPosition, 'row', 'column', 'column');
    const side = getValueForPosition(tabBarPosition, 'bottom: 0px', 'left: 0px', 'right: 0px');

    return useMemo(() => {
        return { tabBarWidth: width, tabBarHeight: height, flexDirection, side };
    }, [width, height, flexDirection, side]);
}
