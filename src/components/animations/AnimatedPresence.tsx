import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface AnimatedPresenceProps {
    children: ReactNode;
}

export type AnimatedPresenceContextType = [boolean, () => void];
export const AnimatedPresenceContext = createContext<AnimatedPresenceContextType>([
    false,
    () => {
        return;
    }
]);

export function AnimatedPresence({ children }: AnimatedPresenceProps): JSX.Element {
    const prevChildren = useRef(children);
    const [visible, setVisible] = useState(children != null);
    const [isSafeToRemove, setIsSafeToRemove] = useState(false);
    const setIsSafeToRemoveTrue = useCallback(() => setIsSafeToRemove(true), [setIsSafeToRemove]);
    const contextValue: AnimatedPresenceContextType = useMemo(() => [visible, setIsSafeToRemoveTrue], [visible, setIsSafeToRemoveTrue]);

    useEffect(() => {
        if (children == null && !isSafeToRemove) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if (children != null) {
            setIsSafeToRemove(false);
        }
    }, [children, isSafeToRemove, setVisible]);

    useEffect(() => {
        if (visible && children != null) {
            prevChildren.current = children;
        }
    }, [prevChildren, children, visible]);

    return (
        <AnimatedPresenceContext.Provider value={contextValue}>
            {children == null && !isSafeToRemove ? prevChildren.current : children}
        </AnimatedPresenceContext.Provider>
    );
}
