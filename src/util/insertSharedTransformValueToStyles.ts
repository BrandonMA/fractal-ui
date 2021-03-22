import { runOnJS, withSpring } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

export function insertSharedTransformValueToStyles(
    propertyName: string,
    animatedStyles: ViewStyle,
    value?: number | string,
    callback?: ((finished: boolean) => void) | null
): void {
    'worklet';

    if (value != null) {
        const transformObject: any = {};

        transformObject[propertyName] = withSpring(value, undefined, (finished) => {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        });

        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform = [...animatedStyles.transform, transformObject];
        }
    }
}
