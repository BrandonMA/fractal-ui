import { Color } from '../../../../../ThemeState';
import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from './TabBarPosition';

export interface StyledTabBarProps {
    tabBarPosition: TabBarPosition;
    tabBarColor: Color;
    safeAreaInsets: EdgeInsets;
    tabBarWidth: string;
    flexDirection: 'row' | 'column';
    side: string;
    tabBarHeight: string;
}
