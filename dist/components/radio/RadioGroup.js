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
import React, { useState, forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { RadioButton } from './RadioButton';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
export var RadioGroup = forwardRef(function (_a, ref) {
    var radioButtons = _a.radioButtons, onChange = _a.onChange, others = __rest(_a, ["radioButtons", "onChange"]);
    var spacings = useTheme().spacings;
    var _b = useState(''), activeValue = _b[0], setActiveValue = _b[1];
    var handleChange = function (id, index) {
        setActiveValue(id);
        onChange(radioButtons[index]);
    };
    var renderRadioButton = function (item, index) {
        var isLastItem = index === radioButtons.length - 1;
        var flexDirection = others.flexDirection;
        return (React.createElement(RadioButton, { marginBottom: flexDirection != 'row' && isLastItem ? 0 : spacings.s, marginRight: flexDirection == 'row' && isLastItem ? 0 : spacings.s, key: item.value, active: item.value == activeValue, label: item.label, value: item.value, onPress: function () { return handleChange(item.value, index); } }));
    };
    return (React.createElement(Layer, __assign({ ref: ref }, others, getRadioGroupAccessibilityProps()), radioButtons.map(renderRadioButton)));
});
//# sourceMappingURL=RadioGroup.js.map