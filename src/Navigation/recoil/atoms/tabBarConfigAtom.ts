import { atom } from 'recoil';
import { TabBarConfig } from '../../components/TabNavigation/TabBar/types/TabBarConfig';

export const tabBarConfigAtom = atom<TabBarConfig>({
    key: 'tabBarConfigAtom',
    default: {
        tabBarVariant: 'basic',
        tabBarHidden: false,
        tabBarPosition: 'bottom'
    }
});
