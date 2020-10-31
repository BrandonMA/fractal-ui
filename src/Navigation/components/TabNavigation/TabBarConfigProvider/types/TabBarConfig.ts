import { TabBarPosition } from '../../TabBar/types/TabBarPosition';
import { TabBarVariant } from '../../TabBar/types/TabBarVariant';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    tabBarPosition: TabBarPosition;
    activeItemColor: string;
    inactiveItemColor: string;
    tabBarHidden?: boolean;
}
