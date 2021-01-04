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
import { ModalCell } from '../../ModalCell';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@shopify/restyle';
export function TimePicker(props) {
    var onChange = props.onChange, iosDoneText = props.iosDoneText, others = __rest(props, ["onChange", "iosDoneText"]);
    var theme = useTheme();
    var initialValue = new Date();
    initialValue.setSeconds(0);
    var _a = useState(initialValue), date = _a[0], setDate = _a[1];
    var _b = useState(initialValue), finalDate = _b[0], setFinalDate = _b[1];
    var _c = useState(false), modalActive = _c[0], setModalActive = _c[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var handleChange = useCallback(function (_, selectedDate) {
        setDate(function (currentDate) { return selectedDate !== null && selectedDate !== void 0 ? selectedDate : currentDate; });
    }, [setDate]);
    var pickFinalValue = function () {
        setFinalDate(date);
        if (onChange != null) {
            onChange(date);
        }
        toggleModal();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), finalDate.toLocaleTimeString()),
        React.createElement(ModalCell, { visible: modalActive, alignItems: 'center', animationType: 'fade', transparent: true, onDismiss: toggleModal, justifyContent: 'flex-end' },
            React.createElement(DateTimePicker, { value: date, mode: 'time', is24Hour: true, display: 'spinner', onChange: handleChange, textColor: theme.colors.textColor }),
            React.createElement(Button, { variant: 'mainInteractiveColor', text: iosDoneText, onPress: pickFinalValue }))));
}
//# sourceMappingURL=index.ios.js.map