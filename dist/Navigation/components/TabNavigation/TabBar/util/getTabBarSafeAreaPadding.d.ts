import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../types/TabBarPosition';
interface SafeAreaProps {
    safeAreaInsets: EdgeInsets;
    tabBarPosition: TabBarPosition;
}
export declare function getTabBarSafeAreaPadding(props: SafeAreaProps): string;
export {};
