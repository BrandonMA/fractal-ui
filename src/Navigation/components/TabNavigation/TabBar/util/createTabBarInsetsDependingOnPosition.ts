import { constants } from '../../../../constants';

export function createTabBarInsetsDependingOnPosition(tabBarPosition: 'right' | 'left' | 'bottom') {
    return {
        top: 0,
        right: tabBarPosition === 'right' ? constants.tabBarWidth : 0,
        bottom: tabBarPosition === 'bottom' ? constants.tabBarHeight : 0,
        left: tabBarPosition === 'left' ? constants.tabBarWidth : 0
    };
}
