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
import React, { useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { BottomCellModal } from '../../modals/BottomCellModal';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import { BaseBox } from '../../baseComponents';
export function Picker(_a) {
    var items = _a.items, onChange = _a.onChange, initialValue = _a.initialValue, _b = _a.iosDoneText, iosDoneText = _b === void 0 ? 'OK' : _b, others = __rest(_a, ["items", "onChange", "initialValue", "iosDoneText"]);
    var _c = usePickerState(initialValue, items), currentValue = _c[0], handleValueChange = _c[1], index = _c[2];
    var colors = useTheme().colors;
    var _d = useState(index), finalIndex = _d[0], setFinalIndex = _d[1];
    var _e = useState(false), modalActive = _e[0], setModalActive = _e[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var pickFinalValue = function () {
        setFinalIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        toggleModal();
    };
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(NativePicker.Item, { color: colors.textColor, label: label, value: value, key: value });
    }, [colors.textColor]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), items[finalIndex][1]),
        React.createElement(BottomCellModal, { visible: modalActive, onDismiss: toggleModal },
            React.createElement(BaseBox, null,
                React.createElement(BasePicker, { selectedValue: currentValue, onValueChange: handleValueChange }, items.map(renderItem)),
                React.createElement(Button, { variant: 'mainInteractiveColor', onPress: pickFinalValue, text: iosDoneText })))));
}
//# sourceMappingURL=index.ios.js.map