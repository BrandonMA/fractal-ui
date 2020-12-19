import { atom } from 'recoil';
import { TabBarPosition } from '../../components/TabNavigation/TabBar/types/TabBarPosition';

export const tabBarPositionAtom = atom<TabBarPosition>({
    key: 'tabBarPositionAtom',
    default: 'bottom'
});
