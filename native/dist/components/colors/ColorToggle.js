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
import React, { useCallback, useState, forwardRef } from 'react';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
import { CheckIcon } from '../../assets/CheckIcon';
var styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
function getVariant(active) {
    return active ? styleVariants.visible : styleVariants.hidden;
}
export var ColorToggle = forwardRef(function (_a, ref) {
    var onActiveChange = _a.onActiveChange, backgroundColor = _a.backgroundColor, active = _a.active, others = __rest(_a, ["onActiveChange", "backgroundColor", "active"]);
    var _b = useState(!!active), uncontrolledActive = _b[0], setUncontrolledActive = _b[1];
    var variant = getVariant(active != null ? active : uncontrolledActive);
    var handleControlledActiveToggle = useCallback(function () {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);
    var handleUncontrolledActiveToggle = useCallback(function () {
        setUncontrolledActive(function (uncontrolledActive) {
            var newValue = !uncontrolledActive;
            if (onActiveChange != null) {
                onActiveChange(newValue, backgroundColor);
            }
            return newValue;
        });
    }, [setUncontrolledActive, onActiveChange, backgroundColor]);
    var handlePress = useCallback(function () {
        if (active != null) {
            handleControlledActiveToggle();
        }
        else {
            handleUncontrolledActiveToggle();
        }
    }, [handleControlledActiveToggle, handleUncontrolledActiveToggle, active]);
    return (React.createElement(Pressable, __assign({ ref: ref, onPress: handlePress, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }, others),
        React.createElement(Layer, { initial: variant, animate: variant, variants: styleVariants },
            React.createElement(CheckIcon, { height: 24, width: 24, fill: 'white' }))));
});
//# sourceMappingURL=ColorToggle.js.map