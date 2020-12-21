import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../recoil/atoms/tabBarPositionAtom';
export function useTabBarPosition() {
    return useRecoilValue(tabBarPositionAtom);
}
//# sourceMappingURL=useTabBarPosition.js.map