import { useMatch } from '../../../hooks/useMatch';
import { usePrevValue } from '../../../../hooks';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { presentationTypeAtom } from '../../../recoil/atoms/presentationTypeAtom';
import { Platform } from 'react-native';
// Return 1 for an active state and 0 for the contrary
export function usePresentationState(basepath, stackPresentation) {
    var active = useMatch(basepath)[0];
    var prevActiveValue = usePrevValue(active);
    var prevPrevActiveValue = usePrevValue(prevActiveValue);
    var _a = useRecoilState(presentationTypeAtom), presentationType = _a[0], setPresentationType = _a[1];
    var prevPresentationType = usePrevValue(presentationType);
    var show = active || ((prevActiveValue || prevPrevActiveValue) && presentationType === 'modal') ? (Platform.OS === 'web' ? 1 : 2) : 0;
    useEffect(function () {
        setPresentationType(stackPresentation !== null && stackPresentation !== void 0 ? stackPresentation : 'push');
        return function () {
            setPresentationType(prevPresentationType);
        };
    }, [stackPresentation, setPresentationType, prevPresentationType]);
    return show;
}
//# sourceMappingURL=usePresentationState.js.map