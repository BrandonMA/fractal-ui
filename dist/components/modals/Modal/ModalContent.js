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
import React, { useEffect, forwardRef } from 'react';
import { Layer } from '../../containers';
import { useIsPresent } from 'framer-motion';
export var ModalContent = forwardRef(function (_a, ref) {
    var children = _a.children, others = __rest(_a, ["children"]);
    var isPresent = useIsPresent();
    console.log(isPresent);
    useEffect(function () {
        document.body.style.overflow = 'hidden';
        return function () {
            document.body.style.overflow = 'scroll';
        };
    }, []);
    return (React.createElement(Layer, __assign({ ref: ref, position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }, others), children));
});
//# sourceMappingURL=ModalContent.js.map