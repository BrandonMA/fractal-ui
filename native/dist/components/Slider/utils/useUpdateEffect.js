import { useRef, useEffect } from 'react';
export var useUpdateEffect = function (effect, deps) {
    var mounted = useRef(false);
    useEffect(function () {
        if (mounted.current) {
            return effect();
        }
        mounted.current = true;
        return undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return mounted.current;
};
//# sourceMappingURL=useUpdateEffect.js.map