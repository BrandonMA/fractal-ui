import { ReactElement } from 'react';
import { PressableProps } from 'react-native';
import { TabBarItemVariant } from './TabBarItemVariant';
import { LayoutProps } from '../../../../Layout/types/LayoutProps';
export interface TabBarItemProps extends PressableProps, LayoutProps {
    path?: string;
    activeColor?: string;
    inactiveColor?: string;
    title: string;
    variant?: TabBarItemVariant;
    children: (color: string, size: number) => JSX.Element;
}
export declare function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps>;
