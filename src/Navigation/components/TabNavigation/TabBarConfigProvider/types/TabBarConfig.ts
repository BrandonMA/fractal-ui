import { TabBarVariant } from '../../TabBar/types/TabBarVariant';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    activeItemColor: string;
    inactiveItemColor: string;
    highlightItemColor?: string;
    tabBarHidden?: boolean;
    tabBarBackgroundColor: string;
    tabBarPosition: 'left' | 'right' | 'bottom';
}
