import { ViewStyle } from 'react-native';

export function insertTransitionValue(animatedStyles: ViewStyle, propertyName: string, value?: number | string): void {
    'worklet';

    if (value != null) {
        animatedStyles[propertyName] = value;
    }
}
