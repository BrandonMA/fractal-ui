import { TabBarPosition } from './TabBarPosition';
import { TabBarVariant } from './TabBarVariant';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    tabBarPosition: TabBarPosition;
    itemActiveColor: string;
    itemInactiveColor: string;
    tabBarHidden?: boolean;
}
