import { atom } from 'recoil';
import { EdgeInsets } from 'react-native-safe-area-context';

export const navigationBarInsetsAtom = atom<EdgeInsets>({
    key: 'navigationBarInsetsAtom',
    default: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});
