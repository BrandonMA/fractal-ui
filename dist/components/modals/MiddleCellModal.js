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
import { DimmedModal } from './DimmedModal';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { AnimatedPresence, BottomSlideAnimation } from '../animations';
import { useAnimatedPresenceState } from '../animations/hooks/useAnimatedPresenceState';
function MiddleCellDesktop(_a) {
    var children = _a.children, onHide = _a.onHide;
    return (React.createElement(BottomSlideAnimation, { overflow: 'hidden', borderRadius: 'm', maxWidth: 550, maxHeight: 550, width: '60%', height: '60%', backgroundColor: 'foreground', onHide: onHide }, children));
}
function MiddleCellPhone(_a) {
    var children = _a.children, onHide = _a.onHide;
    return (React.createElement(BottomSlideAnimation, { overflow: 'hidden', borderRadius: 'm', marginTop: 'm', width: '90%', height: '95%', backgroundColor: 'foreground', onHide: onHide }, children));
}
export function MiddleCellModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, _b = _a.disableStateResetOnDismiss, disableStateResetOnDismiss = _b === void 0 ? false : _b, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "disableStateResetOnDismiss", "visible"]);
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    var justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    var _c = useAnimatedPresenceState(onDismiss, 350, disableStateResetOnDismiss), cellIsVisible = _c[0], hideAnimation = _c[1], resetVisibility = _c[2];
    return (React.createElement(DimmedModal, __assign({ disableStateResetOnDismiss: disableStateResetOnDismiss, onDismiss: hideAnimation, visible: visible, justifyContent: justifyContent, alignItems: 'center' }, others),
        React.createElement(AnimatedPresence, null, cellIsVisible ? React.createElement(Wrapper, { onHide: resetVisibility }, children) : null)));
}
//# sourceMappingURL=MiddleCellModal.js.map