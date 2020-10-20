import { BasicTabBar } from '../variants/BasicTabBar';
import { MiddleActionTabBar } from '../variants/MiddleActionTabBar';
import { TabBarVariant } from '../types/TabBarVariant';
export declare function getTabBarComponent(variant?: TabBarVariant): typeof BasicTabBar | typeof MiddleActionTabBar;
