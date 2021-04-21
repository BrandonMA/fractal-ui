var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { runOnJS, withSpring } from 'react-native-reanimated';
export function insertSharedTransformValueToStyles(propertyName, animatedStyles, value, callback) {
    'worklet';
    if (value != null) {
        var transformObject = {};
        transformObject[propertyName] = withSpring(value, undefined, function (finished) {
            if (callback != null) {
                runOnJS(callback)(finished);
            }
        });
        if (Array.isArray(animatedStyles.transform)) {
            animatedStyles.transform = __spreadArrays(animatedStyles.transform, [transformObject]);
        }
    }
}
//# sourceMappingURL=insertSharedTransformValueToStyles.js.map