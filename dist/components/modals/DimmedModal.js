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
    var { visible, onDismiss } = _a, others = __rest(_a, ["visible", "onDismiss"]);
    return (React.createElement(Modal, { visible: visible, onDismiss: onDismiss, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(Pressable, { zIndex: 999, onPress: onDismiss, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', initial: { opacity: 0 }, animate: { opacity: 0.6 }, exit: { opacity: 0 } }),
        React.createElement(SafeAreaLayer, Object.assign({ zIndex: 1000 }, others))));
}
//# sourceMappingURL=DimmedModal.js.map