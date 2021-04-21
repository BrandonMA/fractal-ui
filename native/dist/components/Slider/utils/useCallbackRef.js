var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useEffect, useCallback, useRef } from 'react';
export function useCallbackRef(fn) {
    var ref = useRef(fn);
    useEffect(function () {
        ref.current = fn;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback((function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArrays([ref], args));
    }), []);
}
//# sourceMappingURL=useCallbackRef.js.map