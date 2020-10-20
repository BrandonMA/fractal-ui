import { TabBarPosition } from './TabBarPosition';
import { TabBarVariant } from './TabBarVariant';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    tabBarPosition: TabBarPosition;
    activeItemColor: string;
    inactiveItemColor: string;
    tabBarHidden?: boolean;
}
