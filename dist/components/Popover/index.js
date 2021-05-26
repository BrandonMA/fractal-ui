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
import React, { forwardRef, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../containers';
import { styleVariants } from './utils/styleVariants';
import { getWebPlacementOffsetStyle } from './utils/getWebPlacementOffsetStyle';
import { OutsideClickListener } from './OutsideClickListener';
const Popover = forwardRef((_a, ref) => {
    var { active, placement = 'bottom', popoverChildren, popoverContainerProps, onRequestClose } = _a, others = __rest(_a, ["active", "placement", "popoverChildren", "popoverContainerProps", "onRequestClose"]);
    const anchorElementRef = useRef();
    const placementOffsetStyle = getWebPlacementOffsetStyle(anchorElementRef, placement);
    return (React.createElement(OutsideClickListener, { onOutsideClick: onRequestClose },
        React.createElement(Layer, { ref: ref, position: 'relative', display: 'inline-block' },
            React.createElement(Layer, Object.assign({ ref: anchorElementRef }, others)),
            React.createElement(AnimatePresence, null, active ? (React.createElement(Layer, Object.assign({ initial: styleVariants.initial, animate: styleVariants.visible, exit: styleVariants.initial, position: 'absolute', minWidth: 200, zIndex: 2000, style: placementOffsetStyle }, popoverContainerProps), popoverChildren())) : null))));
});
Popover.displayName = 'Popover';
export { Popover };
//# sourceMappingURL=index.js.map