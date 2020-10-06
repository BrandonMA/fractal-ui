import { ReactElement } from 'react';
import { TabContentProps } from './TabContent';
import { TabBarItemProps } from './TabBarItem/TabBarItem';
export interface TabScreenProps {
    children: [ReactElement<TabContentProps>, ReactElement<TabBarItemProps>];
    path: string;
}
export declare function TabScreen(props: TabScreenProps): ReactElement<TabScreenProps>;
