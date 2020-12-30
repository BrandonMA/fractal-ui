import { usePrevValue } from '../../../../hooks';
import { useEffect } from 'react';
import { StackPresentationTypes } from 'react-native-screens';
import { useRecoilState } from 'recoil';
import { presentationTypeAtom } from '../../../recoil/atoms/presentationTypeAtom';
import { Platform } from 'react-native';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';

// Return 1 for an active state and 0 for the contrary for web.
// On native platforms, 2 means is the screen on top of the stack, 1 means is behind but visible, 0 is not visible.
export function useScreenActivityState(path: string, stackPresentation?: StackPresentationTypes): 2 | 1 | 0 {
    const isRouteActive = useIsRouteActive(path, false);
    const isRouteActiveAndExact = useIsRouteActive(path, true);
    const prevActiveValue = usePrevValue(isRouteActive);
    const prevPrevActiveValue = usePrevValue(prevActiveValue);

    const [presentationType, setPresentationType] = useRecoilState(presentationTypeAtom);
    const prevPresentationType = usePrevValue(presentationType);
    const isModalAndShouldBeVisible = (prevActiveValue || prevPrevActiveValue) && presentationType === 'modal';

    useEffect(() => {
        setPresentationType(stackPresentation ?? 'push');
        return () => {
            setPresentationType(prevPresentationType);
        };
    }, [stackPresentation, setPresentationType, prevPresentationType]);

    if (isRouteActive || isModalAndShouldBeVisible) {
        if (Platform.OS === 'web') {
            return 1;
        } else {
            return isRouteActiveAndExact ? 2 : 1;
        }
    } else {
        return 0;
    }
}
