import { useLayoutEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { useTabBarPosition } from '../../../../hooks';
import { useIsTabBarHidden } from '../../../../hooks/useIsTabBarHidden';
import { tabBarInsetsAtom } from '../../../../recoil/atoms/tabBarInsetsAtom';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';

export function useTabBarInsetsForPosition(): void {
    const tabBarPosition = useTabBarPosition();
    const tabBarHidden = useIsTabBarHidden();
    const size = getTabBarSizeForPosition(tabBarPosition, tabBarHidden);
    const setTabBarInsets = useSetRecoilState(tabBarInsetsAtom);

    const insets = useMemo(() => {
        return {
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        };
    }, [tabBarPosition, size]);

    useLayoutEffect(() => {
        setTabBarInsets(insets);
    }, [tabBarPosition, setTabBarInsets, insets]);
}
