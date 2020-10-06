import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../../Navigation/components/TabNavigation/TabBar/types/TabBarPosition';
export interface LayoutProps {
    tabBarPosition?: TabBarPosition;
    insets?: EdgeInsets;
}
