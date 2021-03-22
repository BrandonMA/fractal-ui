import { runOnJS, withSpring } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

export function insertSharedValueToStyles(
    propertyName: string,
    animatedStyles: ViewStyle,
    value?: number | string,
    callback?: ((finished: boolean) => void) | null
): void {
    'worklet';

    if (value != null) {
        animatedStyles[propertyName] = withSpring(value, undefined, (finished) => {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        });
    }
}
