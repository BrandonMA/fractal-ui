import { BasicTabBar } from '../TabBarVariants/BasicTabBar';
import { MiddleActionTabBar } from '../TabBarVariants/MiddleActionTabBar';
import { TabBarVariant } from '../types/TabBarVariant';
export declare function getTabBarComponent(variant?: TabBarVariant): typeof BasicTabBar | typeof MiddleActionTabBar;
