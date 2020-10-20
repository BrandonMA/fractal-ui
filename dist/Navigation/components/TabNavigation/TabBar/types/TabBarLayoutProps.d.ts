import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarConfig } from './TabBarConfig';
export interface TabBarLayoutProps extends TabBarConfig {
    tabBarInsets: EdgeInsets;
}
