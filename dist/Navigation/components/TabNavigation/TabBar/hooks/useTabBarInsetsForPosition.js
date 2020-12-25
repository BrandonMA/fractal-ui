import { useLayoutEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { useTabBarPosition } from '../../../../hooks';
import { useIsTabBarHidden } from '../../../../hooks/useIsTabBarHidden';
import { tabBarInsetsAtom } from '../../../../recoil/atoms/tabBarInsetsAtom';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';
export function useTabBarInsetsForPosition() {
    var tabBarPosition = useTabBarPosition();
    var tabBarHidden = useIsTabBarHidden();
    var size = getTabBarSizeForPosition(tabBarPosition, tabBarHidden);
    var setTabBarInsets = useSetRecoilState(tabBarInsetsAtom);
    var insets = useMemo(function () {
        return {
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        };
    }, [tabBarPosition, size]);
    useLayoutEffect(function () {
        setTabBarInsets(insets);
    }, [tabBarPosition, setTabBarInsets, insets]);
}
//# sourceMappingURL=useTabBarInsetsForPosition.js.map