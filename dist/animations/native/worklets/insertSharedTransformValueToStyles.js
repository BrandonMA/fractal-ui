import { runOnJS, withSpring } from 'react-native-reanimated';
export function insertSharedTransformValueToStyles(propertyName, animatedStyles, value, callback) {
    'worklet';
    if (value != null) {
        const transformObject = {};
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
//# sourceMappingURL=insertSharedTransformValueToStyles.js.map