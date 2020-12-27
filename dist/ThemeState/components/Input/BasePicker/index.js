var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { memo } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Platform, View } from 'react-native';
import { useThemeColor } from '../../../hooks/useThemeColor';
import styled from 'styled-components/native';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { useBasePickerState } from './hooks/useBasePickerState';
var Entypo = memo(BaseEntypo);
var StyledPicker = styled(Picker)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    border: none;\n    font-size: 14px;\n    padding: 12px;\n    ", "\n"], ["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    border: none;\n    font-size: 14px;\n    padding: 12px;\n    ", "\n"])), function (props) { return props.bg; }, getCursorStyle);
if (Platform.OS === 'web') {
    StyledPicker = styled(StyledPicker)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        -webkit-appearance: ", ";\n        -moz-appearance: ", ";\n    "], ["\n        -webkit-appearance: ", ";\n        -moz-appearance: ", ";\n    "])), Platform.OS === 'web' ? 'none' : undefined, Platform.OS === 'web' ? 'none' : undefined);
}
var StyledIconContainer = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    top: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    padding-right: 12px;\n"], ["\n    top: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    padding-right: 12px;\n"])));
export function BasePicker(props) {
    var items = props.items, onChange = props.onChange;
    var _a = useBasePickerState(items, onChange), currentValue = _a[0], handleValueChange = _a[1];
    var fieldColor = useThemeColor('fieldColor');
    return (React.createElement(View, null,
        React.createElement(StyledPicker, { selectedValue: currentValue, bg: fieldColor.base400, dropdownIconColor: fieldColor.base300, onValueChange: handleValueChange }, items.map(function (item) { return (React.createElement(Picker.Item, { label: item[1], value: item[0], key: item[0] })); })),
        React.createElement(StyledIconContainer, null,
            React.createElement(Entypo, { name: 'chevron-down', size: 21, color: fieldColor.base300 }))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map