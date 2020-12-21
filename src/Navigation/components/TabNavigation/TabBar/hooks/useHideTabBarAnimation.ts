import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLayoutEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { constants } from '../../../../constants';
import { useIsTabBarHidden } from '../../../../hooks/useIsTabBarHidden';
import { useSpringAnimation } from '../../../../../Animations';

// The TabBar should never be hidden by default.
// Therefore, we do not allow this config property to be passed as props to TabBar itself.
// So if you wanna hide the tab bar you must set the recoil value and this hook will update the animated value for the animation.
export function useHideTabBarAnimation(): Animated.Value {
    const insets = useSafeAreaInsets();
    const animatedValue = useRef(new Animated.Value(insets.bottom + constants.tabBarHeight)).current;
    const tabBarHidden = useIsTabBarHidden();
    const animateHiddenChange = useSpringAnimation(animatedValue, tabBarHidden ? insets.bottom + constants.tabBarHeight : 0);

    useLayoutEffect(() => {
        animateHiddenChange();
    }, [animateHiddenChange]);

    return animatedValue;
}
