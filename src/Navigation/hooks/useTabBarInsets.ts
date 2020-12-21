import { EdgeInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { tabBarInsetsAtom } from '../recoil/atoms/tabBarInsetsAtom';

export function useTabBarInsets(): EdgeInsets {
    return useRecoilValue(tabBarInsetsAtom);
}
