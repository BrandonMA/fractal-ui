import { useRecoilValue } from 'recoil';
import { tabBarInsetsAtom } from '../recoil/atoms/tabBarInsetsAtom';
export function useTabBarInsets() {
    return useRecoilValue(tabBarInsetsAtom);
}
//# sourceMappingURL=useTabBarInsets.js.map