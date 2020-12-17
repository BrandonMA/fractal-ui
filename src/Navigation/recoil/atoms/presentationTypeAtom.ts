import { atom } from 'recoil';
import { StackPresentationTypes } from 'react-native-screens';

export const presentationTypeAtom = atom<StackPresentationTypes>({
    key: 'presentationTypeAtom',
    default: 'push'
});
