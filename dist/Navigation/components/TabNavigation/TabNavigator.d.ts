/// <reference types="react" />
import { ScreenContainerProps } from 'react-native-screens';
import { TabBarVariant } from './TabBar/types/TabBarVariant';
import { LayoutProps } from '../../../Layout/types/LayoutProps';
export interface TabNavigatorProps extends ScreenContainerProps, LayoutProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute?: string;
    variant?: TabBarVariant;
    activeColor?: string;
    inactiveColor?: string;
}
export declare function TabNavigator(props: TabNavigatorProps): JSX.Element;
