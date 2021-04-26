import { ViewStyle } from 'react-native';

export function insertTransformTransitionValue(animatedStyles: ViewStyle, propertyName: string, value?: number | string): void {
    'worklet';

    if (value != null) {
        const transformObject: any = {};

        transformObject[propertyName] = value;

        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform.push(transformObject);
        }
    }
}
