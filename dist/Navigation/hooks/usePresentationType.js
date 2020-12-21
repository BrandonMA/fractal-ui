import { useRecoilValue } from 'recoil';
import { presentationTypeAtom } from '../recoil/atoms/presentationTypeAtom';
export function usePresentationType() {
    return useRecoilValue(presentationTypeAtom);
}
//# sourceMappingURL=usePresentationType.js.map