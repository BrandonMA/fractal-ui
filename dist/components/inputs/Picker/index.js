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
import React, { memo, useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { HorizontalView } from '../../containers/HorizontalView';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BasePicker } from '../../baseComponents/BasePicker';
import { BaseBox } from '../../baseComponents/BaseBox';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Platform } from 'react-native';
var Entypo = memo(BaseEntypo);
var style = {
    appearance: 'none',
    cursor: 'pointer'
};
export function Picker(_a) {
    var items = _a.items, onChange = _a.onChange, initialValue = _a.initialValue, disabled = _a.disabled, others = __rest(_a, ["items", "onChange", "initialValue", "disabled"]);
    var _b = usePickerState(initialValue, items, onChange), currentValue = _b[0], handleValueChange = _b[1];
    var _c = useTheme(), colors = _c.colors, interactiveItems = _c.interactiveItems;
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(NativePicker.Item, { color: colors.black, label: label, value: value, key: value });
    }, [colors.black]);
    return (React.createElement(HorizontalView, __assign({ justifyContent: 'center', paddingHorizontal: 's', borderRadius: 'textFieldRadius', height: interactiveItems.textFieldHeight, backgroundColor: 'textFieldColor', pointerEvents: disabled ? 'none' : 'auto' }, others),
        React.createElement(BasePicker, { borderWidth: '0', backgroundColor: 'transparent', color: 'textColor', selectedValue: currentValue, dropdownIconColor: colors.placeholderColor, onValueChange: handleValueChange, mode: 'dropdown', fontSize: 14, flexGrow: 1, style: Platform.OS === 'web' ? style : undefined }, items.map(renderItem)),
        React.createElement(BaseBox, { alignSelf: 'center' },
            React.createElement(Entypo, { selectable: false, name: 'chevron-down', size: 21, color: colors.placeholderColor }))));
}
//# sourceMappingURL=index.js.map