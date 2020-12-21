import { useRecoilValue } from 'recoil';
import { tabBarHiddenAtom } from '../recoil';

export function useIsTabBarHidden(): boolean {
    return useRecoilValue(tabBarHiddenAtom);
}
