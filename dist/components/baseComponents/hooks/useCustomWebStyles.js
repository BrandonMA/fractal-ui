var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useMemo } from 'react';
import { useRestyle } from '@shopify/restyle';
import { Platform } from 'react-native';
import { restyleFunctions } from '../restyleFunctions';
export function useCustomWebStyles(customStyles, props) {
    var _a = useRestyle(restyleFunctions, props), style = _a.style, restyleProps = __rest(_a, ["style"]);
    var finalStyles = useMemo(function () { return [style, Platform.OS === 'web' ? customStyles : undefined]; }, [style, customStyles]);
    return useMemo(function () {
        return __assign({ style: finalStyles }, restyleProps);
    }, [finalStyles, restyleProps]);
}
//# sourceMappingURL=useCustomWebStyles.js.map