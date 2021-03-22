import { runOnJS, withSpring } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

export function insertReanimatedValue(
    name: string,
    animatedStyles: ViewStyle,
    value?: number | string,
    isTransform?: boolean,
    callback?: ((finished: boolean) => void) | null
): void {
    'worklet';

    const handleCallback = (finished) => {
        if (callback != null) {
            runOnJS(callback)(finished);
        }
    };

    if (value != null) {
        if (isTransform) {
            const transformObject: any = {};
            transformObject[name] = withSpring(value, undefined, handleCallback);

            if (Array.isArray(animatedStyles.transform)) {
                animatedStyles.transform = [...animatedStyles.transform, transformObject];
            }
        } else {
            animatedStyles[name] = withSpring(value, undefined, handleCallback);
        }
    }
}
