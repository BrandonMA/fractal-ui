import { useEffect, useCallback, useRef } from 'react';
export function useCallbackRef(fn) {
    const ref = useRef(fn);
    useEffect(() => {
        ref.current = fn;
    });
    return useCallback(((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }), []);
}
//# sourceMappingURL=useCallbackRef.js.map