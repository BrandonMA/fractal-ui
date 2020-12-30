import { useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useTabBarPosition } from '../../../../hooks';
import { useTabBarIsHidden } from '../../../../hooks/useTabBarIsHidden';
import { tabBarInsetsAtom } from '../../../../recoil/atoms/tabBarInsetsAtom';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';

export function useTabBarInsetsForPosition(): void {
    const tabBarPosition = useTabBarPosition();
    const tabBarHidden = useTabBarIsHidden();
    const size = getTabBarSizeForPosition(tabBarPosition, tabBarHidden);
    const setTabBarInsets = useSetRecoilState(tabBarInsetsAtom);

    useLayoutEffect(() => {
        setTabBarInsets({
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        });
    }, [tabBarPosition, setTabBarInsets, size]);
}
