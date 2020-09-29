import { ReactElement } from 'react';
import { ScreenContainerProps } from 'react-native-screens';
import { TabScreenProps } from './TabScreen';
import { TabBarVariant } from './types/TabBarVariant';
import { TabBarPosition } from './types/TabBarPosition';
export interface TabNavigatorProps extends ScreenContainerProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
    defaultRoute?: string;
    variant?: TabBarVariant;
    activeColor?: string;
    inactiveColor?: string;
    position?: TabBarPosition;
}
export declare function TabNavigator(props: TabNavigatorProps): JSX.Element;
