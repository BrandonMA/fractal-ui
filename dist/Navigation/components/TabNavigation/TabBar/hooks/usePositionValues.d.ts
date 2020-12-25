import { TabBarPosition } from '../types/TabBarPosition';
interface PositionValue {
    tabBarWidth: string;
    tabBarHeight: string;
    flexDirection: 'row' | 'column';
    side: string;
}
export declare function usePositionValues(tabBarPosition: TabBarPosition): PositionValue;
export {};
