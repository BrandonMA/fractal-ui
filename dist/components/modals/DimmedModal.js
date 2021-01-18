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
import React, { useCallback, useState } from 'react';
import { Modal as NativeModal } from 'react-native';
import { BasePressable } from '../baseComponents/BasePressable';
import { BaseSafeAreaView } from '../baseComponents';
import { AnimatedPresence, FadeAnimation } from '../animations';
import { DimmedModalContextProvider } from './context/DimmedModalContextProvider';
export function DimmedModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, visible = _a.visible, justifyContent = _a.justifyContent, alignItems = _a.alignItems, others = __rest(_a, ["children", "onDismiss", "visible", "justifyContent", "alignItems"]);
    var _b = useState(true), backgroundVisible = _b[0], setBackgroundVisible = _b[1];
    var setBackgroundVisibleToTrue = useCallback(function () { return setBackgroundVisible(true); }, [setBackgroundVisible]);
    var hideAnimated = useCallback(function () {
        setBackgroundVisible(false);
        if (onDismiss) {
            onDismiss();
        }
    }, [onDismiss, setBackgroundVisible]);
    return (React.createElement(DimmedModalContextProvider, { hideAnimated: hideAnimated },
        React.createElement(NativeModal, __assign({ visible: visible, transparent: true, animationType: 'fade' }, others),
            React.createElement(BaseSafeAreaView, { flex: 1, justifyContent: justifyContent, alignItems: alignItems },
                React.createElement(AnimatedPresence, null, backgroundVisible ? (React.createElement(FadeAnimation, { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'black', activeOpacity: 0.6, onHide: setBackgroundVisibleToTrue },
                    React.createElement(BasePressable, { width: '100%', height: '100%', onPress: hideAnimated, opacity: 0.6 }))) : null),
                children))));
}
//# sourceMappingURL=DimmedModal.js.map