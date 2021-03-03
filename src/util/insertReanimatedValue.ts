import { withSpring } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

export function insertReanimatedValue(name: string, animatedStyles: ViewStyle, value?: number | string, isTransform?: boolean): void {
    'worklet';

    if (value != null) {
        if (isTransform) {
            const transformObject: any = {};
            transformObject[name] = withSpring(value);

            if (Array.isArray(animatedStyles.transform)) {
                animatedStyles.transform = [...animatedStyles.transform, transformObject];
            }
        } else {
            animatedStyles[name] = withSpring(value);
        }
    }
}
