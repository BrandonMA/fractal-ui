import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
export var AnimatedPresenceContext = createContext([
    false,
    function () {
        return;
    }
]);
export function AnimatedPresence(_a) {
    var children = _a.children;
    var prevChildren = useRef(children);
    var _b = useState(children != null), visible = _b[0], setVisible = _b[1];
    var _c = useState(false), isSafeToRemove = _c[0], setIsSafeToRemove = _c[1];
    var setIsSafeToRemoveTrue = useCallback(function () { return setIsSafeToRemove(true); }, [setIsSafeToRemove]);
    var contextValue = useMemo(function () { return [visible, setIsSafeToRemoveTrue]; }, [visible, setIsSafeToRemoveTrue]);
    useEffect(function () {
        if (children == null && !isSafeToRemove) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
        if (children != null) {
            setIsSafeToRemove(false);
        }
    }, [children, isSafeToRemove, setVisible]);
    useEffect(function () {
        if (visible && children != null) {
            prevChildren.current = children;
        }
    }, [prevChildren, children, visible]);
    return (React.createElement(AnimatedPresenceContext.Provider, { value: contextValue }, children == null && !isSafeToRemove ? prevChildren.current : children));
}
//# sourceMappingURL=AnimatedPresence.js.map