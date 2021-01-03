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
export function Picker(props) {
    var items = props.items, onChange = props.onChange, others = __rest(props, ["items", "onChange"]);
    var _a = usePickerState(items, onChange), currentValue = _a[0], handleValueChange = _a[1];
    var theme = useTheme();
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(NativePicker.Item, { color: theme.colors.black, label: label, value: value, key: value });
    }, [theme.colors.black]);
    return (React.createElement(HorizontalView, __assign({ justifyContent: 'center', paddingHorizontal: 's', borderRadius: 'textFieldRadius', height: theme.interactiveItems.textFieldHeight, backgroundColor: 'textFieldColor' }, others),
        React.createElement(BasePicker, { borderWidth: '0', backgroundColor: 'transparent', color: 'textColor', selectedValue: currentValue, dropdownIconColor: theme.colors.placeholderColor, onValueChange: handleValueChange, mode: 'dropdown', fontSize: 14, flexGrow: 1, style: Platform.OS === 'web' ? style : undefined }, items.map(renderItem)),
        React.createElement(BaseBox, { alignSelf: 'center' },
            React.createElement(Entypo, { name: 'chevron-down', size: 21, color: theme.colors.placeholderColor }))));
}
//# sourceMappingURL=index.js.map