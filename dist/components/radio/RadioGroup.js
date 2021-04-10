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
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer/index.native';
import { RadioButton } from './RadioButton';
export function RadioGroup(_a) {
    var radioButtons = _a.radioButtons, onChange = _a.onChange, others = __rest(_a, ["radioButtons", "onChange"]);
    var spacings = useTheme().spacings;
    var _b = useState(''), activeID = _b[0], setActiveID = _b[1];
    var handleChange = function (id, index) {
        setActiveID(id);
        onChange(radioButtons[index]);
    };
    var renderRadioButton = function (item, index) {
        var isLastItem = index === radioButtons.length - 1;
        var flexDirection = others.flexDirection;
        return (React.createElement(RadioButton, { marginBottom: flexDirection != 'row' && isLastItem ? 0 : spacings.s, marginRight: flexDirection == 'row' && isLastItem ? 0 : spacings.s, key: item.id, active: item.id == activeID, label: item.label, onPress: function () { return handleChange(item.id, index); } }));
    };
    return React.createElement(Layer, __assign({}, others), radioButtons.map(renderRadioButton));
}
//# sourceMappingURL=RadioGroup.js.map