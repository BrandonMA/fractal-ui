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
import React, { memo, useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { Text } from '../../Text';
import { BaseBox } from '../../baseComponents/BaseBox';
import { ModalCell } from '../../ModalCell';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { BaseTouchableOpacity } from '../../baseComponents/BaseTouchableOpacity';
import { Button } from '../../buttons/Button';
var Entypo = memo(BaseEntypo);
export function Picker(props) {
    var items = props.items, onChange = props.onChange, iosDoneText = props.iosDoneText, others = __rest(props, ["items", "onChange", "iosDoneText"]);
    var _a = usePickerState(items), currentValue = _a[0], handleValueChange = _a[1], index = _a[2];
    var theme = useTheme();
    var _b = useState(0), finalIndex = _b[0], setFinalIndex = _b[1];
    var _c = useState(false), modalActive = _c[0], setModalActive = _c[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var pickFinalValue = useCallback(function () {
        setFinalIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        toggleModal();
    }, [setFinalIndex, index, toggleModal, onChange, items]);
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(NativePicker.Item, { color: theme.colors.black, label: label, value: value, key: value });
    }, [theme.colors.black]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseTouchableOpacity, __assign({ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 's', borderRadius: 'textFieldRadius', height: theme.interactiveItems.textFieldHeight, backgroundColor: 'textFieldColor', onPress: toggleModal }, others),
            React.createElement(BaseBox, { flexGrow: 1, justifyContent: 'center' },
                React.createElement(Text, { fontSize: 14 }, items[finalIndex][1])),
            React.createElement(BaseBox, { alignSelf: 'center' },
                React.createElement(Entypo, { name: 'chevron-down', size: 21, color: theme.colors.placeholderColor }))),
        React.createElement(ModalCell, { visible: modalActive, animationType: 'fade', transparent: true, onDismiss: toggleModal, justifyContent: 'flex-end' },
            React.createElement(BasePicker, { selectedValue: currentValue, onValueChange: handleValueChange }, items.map(renderItem)),
            React.createElement(Button, { variant: 'mainInteractiveColor', onPress: pickFinalValue, text: iosDoneText }))));
}
//# sourceMappingURL=index.ios.js.map