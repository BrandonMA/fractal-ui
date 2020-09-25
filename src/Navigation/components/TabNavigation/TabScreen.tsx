import React, { ReactElement } from 'react';
import { TabContentProps } from './TabContent';
import { TabBarItemProps } from './TabBarItem';

export interface TabScreenProps {
    children: [ReactElement<TabContentProps>, ReactElement<TabBarItemProps>];
}

export function TabScreen(props: TabScreenProps): ReactElement<TabScreenProps> {
    return <>{props.children}</>;
}
