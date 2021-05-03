import { useRef, useEffect } from 'react';
export const useUpdateEffect = (effect, deps) => {
    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) {
            return effect();
        }
        mounted.current = true;
        return undefined;
    }, deps);
    return mounted.current;
};
//# sourceMappingURL=useUpdateEffect.js.map