import { useMatch } from '../../../hooks/useMatch';
import { usePrevValue } from '../../../../hooks';
import { useContext, useEffect } from 'react';
import { PresentationTypeContext } from '../../PresentationTypeProvider';
import { StackPresentationTypes } from 'react-native-screens';

// Return 1 for an active state and 0 for the contrary
export function usePresentationState(basepath: string, stackPresentation?: StackPresentationTypes): 1 | 0 {
    const [active] = useMatch(basepath);
    const prevActiveValue = usePrevValue(active);
    const prevPrevActiveValue = usePrevValue(prevActiveValue);

    const { presentationType, setPresentationType } = useContext(PresentationTypeContext);
    const prevPresentationType = usePrevValue(presentationType);
    const show = active || ((prevActiveValue || prevPrevActiveValue) && presentationType === 'modal') ? 1 : 0;

    useEffect(() => {
        setPresentationType(stackPresentation ?? 'push');
        return () => {
            setPresentationType(prevPresentationType);
        };
    }, [stackPresentation, setPresentationType, prevPresentationType]);

    return show;
}
