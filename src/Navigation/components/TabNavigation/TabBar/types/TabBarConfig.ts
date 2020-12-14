import { TabBarVariant } from './TabBarVariant';

export interface TabBarConfig {
    tabBarVariant: TabBarVariant;
    tabBarHidden?: boolean;
    tabBarPosition: 'left' | 'right' | 'bottom';
}
