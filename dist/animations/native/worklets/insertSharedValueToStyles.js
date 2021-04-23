import { runOnJS, withSpring } from 'react-native-reanimated';
export function insertSharedValueToStyles(propertyName, animatedStyles, value, callback) {
    'worklet';
    if (value != null) {
        animatedStyles[propertyName] = withSpring(value, undefined, (finished) => {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        });
    }
}
//# sourceMappingURL=insertSharedValueToStyles.js.map