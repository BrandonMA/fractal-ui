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
import { Modal } from './Modal';
import React from 'react';
import { Pressable } from '../buttons';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
export function DimmedModal(_a) {
    var visible = _a.visible, onDismiss = _a.onDismiss, others = __rest(_a, ["visible", "onDismiss"]);
    return (React.createElement(Modal, { visible: visible, onDismiss: onDismiss, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(Pressable, { zIndex: 999, onPress: onDismiss, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', initial: { opacity: 0 }, animate: { opacity: 0.6 }, exit: { opacity: 0 } }),
        React.createElement(SafeAreaLayer, __assign({ zIndex: 1000 }, others))));
}
//# sourceMappingURL=DimmedModal.js.map