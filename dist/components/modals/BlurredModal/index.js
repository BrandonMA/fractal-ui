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
import React from 'react';
import { Pressable } from '../../buttons/Pressable';
import { Modal } from '../Modal';
import { SafeAreaLayer } from '../../containers/SafeAreaLayer';
import { ModalMiddleCell } from '../ModalMiddleCell';
export function BlurredModal(_a) {
    var onDismiss = _a.onDismiss, visible = _a.visible, others = __rest(_a, ["onDismiss", "visible"]);
    return (React.createElement(Modal, { visible: visible, onDismiss: onDismiss },
        React.createElement(Pressable, { zIndex: 999, onPress: onDismiss, position: 'absolute', width: '100%', height: '100%', initial: { backdropFilter: 'blur(0px)', '-webkit-backdrop-filter': 'blur(0px)' }, animate: { backdropFilter: 'blur(20px)', '-webkit-backdrop-filter': 'blur(20px)' }, exit: { backdropFilter: 'blur(0px)', '-webkit-backdrop-filter': 'blur(0px)' } }),
        React.createElement(SafeAreaLayer, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, zIndex: 1000, pointerEvents: 'box-none', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
            React.createElement(ModalMiddleCell, __assign({}, others)))));
}
//# sourceMappingURL=index.js.map