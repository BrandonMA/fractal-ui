import React, { ReactElement } from 'react';
import { TabScreenContentProps } from './TabScreenContent';
import { TabItemProps } from './TabItem';

export interface TabScreenProps {
    children: [ReactElement<TabScreenContentProps>, ReactElement<TabItemProps>];
    path: string;
}

export function TabScreen(props: TabScreenProps): ReactElement<TabScreenProps> {
    return <>{props.children}</>;
}
