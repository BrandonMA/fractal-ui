import { atom } from 'recoil';
import { EdgeInsets } from 'react-native-safe-area-context';

export const tabBarInsetsAtom = atom<EdgeInsets>({
    key: 'tabBarInsetsAtom',
    default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
