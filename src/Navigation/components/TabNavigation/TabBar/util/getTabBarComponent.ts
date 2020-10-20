import { BasicTabBar } from '../variants/BasicTabBar';
import { MiddleActionTabBar } from '../variants/MiddleActionTabBar';
import { TabBarVariant } from '../types/TabBarVariant';

export function getTabBarComponent(variant?: TabBarVariant): typeof BasicTabBar | typeof MiddleActionTabBar {
    if (variant === 'middle-action') {
        return MiddleActionTabBar;
    } else {
        return BasicTabBar;
    }
}
