var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { withSpring } from 'react-native-reanimated';
export function insertReanimatedValue(name, animatedStyles, value, isTransform) {
    'worklet';
    if (value != null) {
        if (isTransform) {
            var transformObject = {};
            transformObject[name] = withSpring(value);
            if (Array.isArray(animatedStyles.transform)) {
                animatedStyles.transform = __spreadArrays(animatedStyles.transform, [transformObject]);
            }
        }
        else {
            animatedStyles[name] = withSpring(value);
        }
    }
}
//# sourceMappingURL=insertReanimatedValue.js.map