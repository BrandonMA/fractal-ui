import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarConfig } from '../../TabBarConfigProvider/types/TabBarConfig';

export interface TabBarLayoutProps extends TabBarConfig {
    safeAreaInsets: EdgeInsets;
}
