import { StackPresentationTypes } from 'react-native-screens';
import { useRecoilValue } from 'recoil';
import { presentationTypeAtom } from '../recoil/atoms/presentationTypeAtom';

export function usePresentationType(): StackPresentationTypes {
    return useRecoilValue(presentationTypeAtom);
}
