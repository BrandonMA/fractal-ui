import { ReactElement } from 'react';
import { ScreenContainerProps } from 'react-native-screens';
import { TabScreenProps } from './TabScreen';
import { TabBarVariant } from './TabBar/types/TabBarVariant';
import { LayoutProps } from '../../../Layout/types/LayoutProps';
export interface TabNavigatorProps extends ScreenContainerProps, LayoutProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
    defaultRoute?: string;
    variant?: TabBarVariant;
    activeColor?: string;
    inactiveColor?: string;
}
export declare function TabNavigator(props: TabNavigatorProps): JSX.Element;
