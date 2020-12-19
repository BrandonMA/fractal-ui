import { Color } from '../../../../../ThemeState';
import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarSideStyle } from './TabBarSideStyle';
import { TabBarPosition } from './TabBarPosition';

export interface StyledTabBarProps {
    tabBarPosition: TabBarPosition;
    tabBarColor: Color;
    safeAreaInsets: EdgeInsets;
    tabBarWidth: string;
    flexDirection: 'row' | 'column';
    side: TabBarSideStyle;
    tabBarHeight: string;
}
