/// <reference types="react" />
import { ScreenContainerProps } from 'react-native-screens';
import { TabBarConfig } from './TabBar';
export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute?: string;
    tabBarConfig?: TabBarConfig;
}
export declare function TabNavigator(props: TabNavigatorProps): JSX.Element;
