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
import React, { useCallback } from 'react';
import { BasePressable } from '../../baseComponents/BasePressable';
import { useColorToggleAnimation } from './hooks/useColorToggleAnimation';
import { CheckIcon } from '../../assets/CheckIcon';
import { BaseBox } from '../../baseComponents';
export function ColorToggle(_a) {
    var onActiveChange = _a.onActiveChange, backgroundColor = _a.backgroundColor, active = _a.active, others = __rest(_a, ["onActiveChange", "backgroundColor", "active"]);
    var _b = useColorToggleAnimation(active), setActive = _b[1], iconStyle = _b[2];
    var handleControlledActiveToggle = useCallback(function () {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);
    var handleUncontrolledActiveToggle = useCallback(function () {
        setActive(function (internalActive) {
            if (onActiveChange != null) {
                onActiveChange(!internalActive, backgroundColor);
            }
            return !internalActive;
        });
    }, [setActive, onActiveChange, backgroundColor]);
    var handlePress = useCallback(function () {
        if (active != null) {
            handleControlledActiveToggle();
        }
        else {
            handleUncontrolledActiveToggle();
        }
    }, [active, handleUncontrolledActiveToggle, handleControlledActiveToggle]);
    return (React.createElement(BasePressable, __assign({ onPress: handlePress, width: 40, height: 40, borderRadius: 'xl', justifyContent: 'center', alignItems: 'center', style: { backgroundColor: backgroundColor } }, others),
        React.createElement(BaseBox, { style: iconStyle },
            React.createElement(CheckIcon, { height: 24, width: 24, fill: 'white' }))));
}
//# sourceMappingURL=index.js.map