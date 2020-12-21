import { TabBarPosition } from '../types/TabBarPosition';
import { EdgeInsets } from 'react-native-safe-area-context';
interface PositionValue {
    tabBarWidth: string;
    tabBarHeight: string;
    flexDirection: 'row' | 'column';
    side: string;
}
export declare function usePositionValues(tabBarPosition: TabBarPosition, safeAreaInsets: EdgeInsets): PositionValue;
export {};
