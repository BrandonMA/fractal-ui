import { useMatch } from '../../../hooks/useMatch';
import { usePrevValue } from '../../../../hooks';
import { useEffect } from 'react';
import { StackPresentationTypes } from 'react-native-screens';
import { useRecoilState } from 'recoil';
import { presentationTypeAtom } from '../../../recoil/atoms/presentationTypeAtom';
import { Platform } from 'react-native';

// Return 1 for an active state and 0 for the contrary
export function usePresentationState(basepath: string, stackPresentation?: StackPresentationTypes): 2 | 1 | 0 {
    const [active] = useMatch(basepath);
    const prevActiveValue = usePrevValue(active);
    const prevPrevActiveValue = usePrevValue(prevActiveValue);

    const [presentationType, setPresentationType] = useRecoilState(presentationTypeAtom);
    const prevPresentationType = usePrevValue(presentationType);
    const show = active || ((prevActiveValue || prevPrevActiveValue) && presentationType === 'modal') ? (Platform.OS === 'web' ? 1 : 2) : 0;

    useEffect(() => {
        setPresentationType(stackPresentation ?? 'push');
        return () => {
            setPresentationType(prevPresentationType);
        };
    }, [stackPresentation, setPresentationType, prevPresentationType]);

    return show;
}
