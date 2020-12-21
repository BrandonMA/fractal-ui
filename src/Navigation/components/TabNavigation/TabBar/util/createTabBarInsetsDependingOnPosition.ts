import { constants } from '../../../../constants';
import { EdgeInsets } from 'react-native-safe-area-context';

export function createTabBarInsetsDependingOnPosition(tabBarPosition: 'right' | 'left' | 'bottom'): EdgeInsets {
    return {
        top: 0,
        right: tabBarPosition === 'right' ? constants.tabBarWidth : 0,
        bottom: tabBarPosition === 'bottom' ? constants.tabBarHeight : 0,
        left: tabBarPosition === 'left' ? constants.tabBarWidth : 0
    };
}
