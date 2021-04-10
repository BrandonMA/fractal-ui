import { useEffect, useCallback, DependencyList, useRef } from 'react';

export function useEventCallback(fn: () => any, dependencies: DependencyList): () => any {
    const ref = useRef(fn);

    useEffect(() => {
        ref.current = fn;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}
