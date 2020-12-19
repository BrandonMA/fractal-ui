import { TabBarVariant } from './TabBarVariant';
import { TabBarPosition } from './TabBarPosition';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    tabBarHidden?: boolean;
    tabBarPosition: TabBarPosition;
}
