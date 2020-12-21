import { TabBarPosition } from '../components/TabNavigation/TabBar/types/TabBarPosition';
import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../recoil/atoms/tabBarPositionAtom';

export function useTabBarPosition(): TabBarPosition {
    return useRecoilValue(tabBarPositionAtom);
}
