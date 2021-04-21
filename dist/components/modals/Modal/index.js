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
import { AnimatePresence } from 'framer-motion';
import React, { forwardRef } from 'react';
import { ModalPortal } from './ModalPortal';
import { ModalContent } from './ModalContent';
export var Modal = forwardRef(function (_a, ref) {
    var visible = _a.visible, others = __rest(_a, ["visible"]);
    return (React.createElement(ModalPortal, null,
        React.createElement(AnimatePresence, null, visible ? React.createElement(ModalContent, __assign({ ref: ref, key: 'ModalContent' }, others)) : null)));
});
//# sourceMappingURL=index.js.map