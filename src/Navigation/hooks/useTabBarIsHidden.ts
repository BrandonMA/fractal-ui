import { useRecoilValue } from 'recoil';
import { tabBarHiddenAtom } from '../recoil';

export function useTabBarIsHidden(): boolean {
    return useRecoilValue(tabBarHiddenAtom);
}
