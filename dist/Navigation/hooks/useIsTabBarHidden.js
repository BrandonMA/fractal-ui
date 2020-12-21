import { useRecoilValue } from 'recoil';
import { tabBarHiddenAtom } from '../recoil';
export function useIsTabBarHidden() {
    return useRecoilValue(tabBarHiddenAtom);
}
//# sourceMappingURL=useIsTabBarHidden.js.map