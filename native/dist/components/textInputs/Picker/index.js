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
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { BasePicker } from './BasePicker';
import { Layer } from '../../containers/Layer';
import { ChevronDown } from '../../../assets/ChevronDown';
import { PickerItem } from './PickerItem';
export function Picker(_a) {
    var items = _a.items, onChange = _a.onChange, initialValue = _a.initialValue, disabled = _a.disabled, isReadOnly = _a.isReadOnly, others = __rest(_a, ["items", "onChange", "initialValue", "disabled", "isReadOnly"]);
    var _b = usePickerState(initialValue, items, onChange, isReadOnly), currentValue = _b[0], handleValueChange = _b[1];
    var _c = useTheme(), colors = _c.colors, sizes = _c.sizes, borderRadius = _c.borderRadius, spacings = _c.spacings;
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(PickerItem, { color: colors.black, label: label, value: value, key: value });
    }, [colors.black]);
    return (React.createElement(HorizontalLayer, __assign({ justifyContent: 'space-between', alignItems: 'center', position: 'relative', borderRadius: borderRadius.s, height: sizes.textFieldHeight, backgroundColor: colors.textField, pointerEvents: disabled ? 'none' : 'auto', paddingLeft: spacings.s, paddingRight: spacings.s }, others),
        React.createElement(BasePicker, { borderWidth: 0, backgroundColor: 'transparent', color: colors.text, selectedValue: currentValue, dropdownIconColor: colors.placeholder, onValueChange: handleValueChange, mode: 'dropdown', fontSize: 14, flex: 1 }, items.map(renderItem)),
        React.createElement(Layer, { alignSelf: 'center', position: 'absolute', right: 0, marginRight: spacings.s },
            React.createElement(ChevronDown, { width: 21, fill: colors.placeholder }))));
}
//# sourceMappingURL=index.js.map