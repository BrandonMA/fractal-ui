import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';

export interface RightSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}

export function RightSlideAnimation({ onHide, style, ...others }: RightSlideAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const handleHide = useHideCallback(setIsSafeToRemove, onHide);

    const screenWidth = Dimensions.get('screen').width;
    const offsetX = useRef(new Animated.Value(screenWidth)).current;
    const showAnimation = useSpringAnimation(offsetX, 0);
    const hideAnimation = useTimingAnimation(offsetX, screenWidth, 300, handleHide);

    const animatedStyle = useMemo(() => {
        return [
            style,
            {
                transform: [
                    {
                        translateX: offsetX
                    }
                ]
            }
        ];
    }, [offsetX]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...others} style={animatedStyle} />;
}
