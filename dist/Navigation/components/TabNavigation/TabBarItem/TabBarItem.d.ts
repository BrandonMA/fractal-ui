import { ReactElement } from 'react';
import { PressableProps } from 'react-native';
import { TabBarItemVariant } from './types/TabBarItemVariant';
export interface TabBarItemProps extends PressableProps {
    title: string;
    path: string;
    children: (color: string, size: number) => JSX.Element;
    activeColor?: string;
    inactiveColor?: string;
    variant?: TabBarItemVariant;
}
export declare function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps>;
