import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useSpringAnimation } from '../../../animationHooks/useSpringAnimation';
import { BasePressableProps } from '../../baseComponents/BasePressable';

export function useBaseButtonAnimations(props: BasePressableProps): [(event: unknown) => void, (event: unknown) => void, unknown] {
    const { style, onPressIn, onPressOut } = props;

    const scaleValue = useRef(new Animated.Value(1)).current;
    const pressInAnimation = useSpringAnimation(scaleValue, 0.95);
    const pressOutAnimation = useSpringAnimation(scaleValue, 1);

    const handlePressIn = useCallback(
        (event) => {
            pressInAnimation();
            if (onPressIn != null) {
                onPressIn(event);
            }
        },
        [pressInAnimation, onPressIn]
    );

    const handlePressOut = useCallback(
        (event) => {
            pressOutAnimation();
            if (onPressOut != null) {
                onPressOut(event);
            }
        },
        [pressOutAnimation, onPressOut]
    );

    const finalStyle = useMemo(() => {
        return [
            style,
            {
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }
        ];
    }, [scaleValue, style]);

    return useMemo(() => [handlePressIn, handlePressOut, finalStyle], [handlePressIn, handlePressOut, finalStyle]);
}
