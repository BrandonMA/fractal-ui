import { ReactElement } from 'react';
import { TabScreenContentProps } from './TabScreenContent';
import { TabBarItemProps } from './TabBarItem/TabBarItem';
export interface TabScreenProps {
    children: [ReactElement<TabScreenContentProps>, ReactElement<TabBarItemProps>];
    path: string;
}
export declare function TabScreen(props: TabScreenProps): ReactElement<TabScreenProps>;
