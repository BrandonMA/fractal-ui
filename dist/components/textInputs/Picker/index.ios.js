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
import { PickerButton } from '../PickerButton';
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { PickerItem } from './PickerItem';
import { BasePicker } from './BasePicker';
import { BlurredModal } from '../../modals';
export function Picker(_a) {
    var items = _a.items, initialValue = _a.initialValue, onChange = _a.onChange, _b = _a.iosDoneText, iosDoneText = _b === void 0 ? 'Done' : _b, others = __rest(_a, ["items", "initialValue", "onChange", "iosDoneText"]);
    var _c = usePickerState(initialValue, items, onChange), currentValue = _c[0], handleValueChange = _c[1], index = _c[2];
    var _d = useState(false), modalActive = _d[0], setModalActive = _d[1];
    var colors = useTheme().colors;
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(PickerItem, { color: colors.text, label: label, value: value, key: value });
    }, [colors.text]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), items[index][1]),
        React.createElement(BlurredModal, { dismissText: iosDoneText, visible: modalActive, onDismiss: toggleModal },
            React.createElement(BasePicker, { selectedValue: currentValue, onValueChange: handleValueChange }, items.map(renderItem)))));
}
//# sourceMappingURL=index.ios.js.map