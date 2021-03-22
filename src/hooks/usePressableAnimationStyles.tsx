import { PressableProps } from '../components/buttons/Pressable/types';
import { ViewStyle } from 'react-native';
import { useReanimatedValueCallback } from './useReanimatedValueCallback';
import { useAnimatedStyle } from 'react-native-reanimated';
import { insertSharedValueToStyles } from '../util/insertSharedValueToStyles';

export function usePressableAnimationStyles({
    opacity,
    whileTap,
    width,
    height,
    backgroundColor,
    onPressOut,
    onPressIn
}: PressableProps): [ViewStyle, () => void, () => void] {
    const [opacityAnimatedValue, animateOpacity, resetOpacity] = useReanimatedValueCallback(opacity ?? 1, whileTap?.opacity);
    const [widthAnimatedValue, animateWidth, resetWidth] = useReanimatedValueCallback(width ?? '100%', whileTap?.width);
    const [heightAnimatedValue, animateHeight, resetHeight] = useReanimatedValueCallback(height ?? 0, whileTap?.height);
    const [scaleAnimatedValue, animateScale, resetScale] = useReanimatedValueCallback(1, whileTap?.scale);
    const [rotationAnimatedValue, animateRotation, resetRotation] = useReanimatedValueCallback('0deg', whileTap?.rotate);
    const [backgroundColorAnimatedValue, animateBackgroundColor, resetBackgroundColor] = useReanimatedValueCallback(
        backgroundColor ?? 'transparent',
        whileTap?.backgroundColor
    );

    const handlePressIn = () => {
        animateOpacity();
        animateBackgroundColor();
        animateWidth();
        animateHeight();
        animateScale();
        animateRotation();

        if (onPressIn) {
            onPressIn();
        }
    };

    const handlePressOut = () => {
        resetOpacity();
        resetBackgroundColor();
        resetWidth();
        resetHeight();
        resetScale();
        resetRotation();

        if (onPressOut) {
            onPressOut();
        }
    };

    const tapStyles = useAnimatedStyle(() => {
        const styles: ViewStyle = {
            transform: []
        };

        insertSharedValueToStyles('opacity', styles, opacityAnimatedValue.value);
        insertSharedValueToStyles('width', styles, widthAnimatedValue.value);
        insertSharedValueToStyles('height', styles, heightAnimatedValue.value);
        insertSharedValueToStyles('backgroundColor', styles, backgroundColorAnimatedValue.value);
        insertSharedValueToStyles('scale', styles, scaleAnimatedValue.value, true);
        insertSharedValueToStyles('rotate', styles, rotationAnimatedValue.value, true);

        return styles;
    });

    return [tapStyles, handlePressIn, handlePressOut];
}
