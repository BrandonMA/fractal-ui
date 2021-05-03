import { useEffect, useCallback, useRef } from 'react';

export function useCallbackRef<T extends (...args: any[]) => any>(fn: T | undefined): T {
    const ref = useRef(fn);

    useEffect(() => {
        ref.current = fn;
    });

    return useCallback(((...args) => ref.current?.(...args)) as T, []);
}
