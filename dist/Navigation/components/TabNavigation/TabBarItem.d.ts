import { ReactElement } from 'react';
import { PressableProps } from 'react-native';
import { TabBarItemVariant } from './types/TabBarItemVariant';
import { TabBarPosition } from './types/TabBarPosition';
export interface TabBarItemProps extends PressableProps {
    path?: string;
    activeColor?: string;
    inactiveColor?: string;
    title: string;
    variant?: TabBarItemVariant;
    position?: TabBarPosition;
    children: (color: string, size: number) => JSX.Element;
}
export declare function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps>;
