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
import { Modal as NativeModal } from 'react-native';
import { BasePressable } from '../baseComponents/BasePressable';
import { BaseSafeAreaView } from '../baseComponents';
export function DimmedModal(props) {
    var children = props.children, onDismiss = props.onDismiss, visible = props.visible, justifyContent = props.justifyContent, alignItems = props.alignItems, others = __rest(props, ["children", "onDismiss", "visible", "justifyContent", "alignItems"]);
    return (React.createElement(NativeModal, __assign({ visible: visible, transparent: true, animationType: 'fade' }, others),
        React.createElement(BaseSafeAreaView, { flex: 1, justifyContent: justifyContent, alignItems: alignItems },
            React.createElement(BasePressable, { onPress: onDismiss, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'black', opacity: 0.6 }),
            children)));
}
//# sourceMappingURL=DimmedModal.js.map