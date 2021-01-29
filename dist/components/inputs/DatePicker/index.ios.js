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
import React, { useCallback, useEffect, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { BlurrediOSModal } from '../../modals/BlurrediOSModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@shopify/restyle';
export function DatePicker(_a) {
    var initialDate = _a.initialDate, _b = _a.mode, mode = _b === void 0 ? 'date' : _b, minDate = _a.minDate, maxDate = _a.maxDate, onChange = _a.onChange, _c = _a.iosDoneText, iosDoneText = _c === void 0 ? 'Done' : _c, others = __rest(_a, ["initialDate", "mode", "minDate", "maxDate", "onChange", "iosDoneText"]);
    var defaultDate = new Date();
    defaultDate.setSeconds(0);
    var _d = useState(false), modalActive = _d[0], setModalActive = _d[1];
    var _e = useState(initialDate !== null && initialDate !== void 0 ? initialDate : defaultDate), date = _e[0], setDate = _e[1];
    var colors = useTheme().colors;
    var _f = useState('black'), textColor = _f[0], setTextColor = _f[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var onPickerValueChange = useCallback(function (_, selectedDate) {
        setDate(function (currentDate) {
            var newDate = selectedDate !== null && selectedDate !== void 0 ? selectedDate : currentDate;
            if (onChange != null) {
                onChange(newDate);
            }
            return newDate;
        });
    }, [setDate, onChange]);
    useEffect(function () {
        // Further info on the bug: https://github.com/react-native-datetimepicker/datetimepicker/issues/308
        // This is really not performant so check constanly if the bug is fixed.
        if (modalActive) {
            setTimeout(function () {
                setTextColor(colors.textColor);
            }, 100);
        }
        else {
            setTextColor('black');
        }
    }, [modalActive, colors]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()),
        React.createElement(BlurrediOSModal, { dismissText: iosDoneText, visible: modalActive, onDismiss: toggleModal },
            React.createElement(DateTimePicker, { value: date, mode: mode, display: 'spinner', is24Hour: true, minimumDate: minDate, maximumDate: maxDate, onChange: onPickerValueChange, textColor: textColor }))));
}
//# sourceMappingURL=index.ios.js.map