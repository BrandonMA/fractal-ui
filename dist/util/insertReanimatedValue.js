var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { withSpring } from 'react-native-reanimated';
export function insertReanimatedValue(name, animatedStyles, value, isTransform) {
    'worklet';
    if (value != null) {
        if (isTransform) {
            var transformObject = {};
            transformObject[name] = withSpring(value);
            if (Array.isArray(animatedStyles.transform)) {
                animatedStyles.transform = __spreadArray(__spreadArray([], animatedStyles.transform), [transformObject]);
            }
        }
        else {
            animatedStyles[name] = withSpring(value);
        }
    }
}
//# sourceMappingURL=insertReanimatedValue.js.map