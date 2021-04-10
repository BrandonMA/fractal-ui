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
import DateTimePicker from '@react-native-community/datetimepicker';
export function DatePicker(_a) {
    var initialDate = _a.initialDate, _b = _a.mode, mode = _b === void 0 ? 'date' : _b, minDate = _a.minDate, maxDate = _a.maxDate, onChange = _a.onChange, others = __rest(_a, ["initialDate", "mode", "minDate", "maxDate", "onChange"]);
    var defaultDate = new Date();
    defaultDate.setSeconds(0);
    var _c = useState(false), modalActive = _c[0], setModalActive = _c[1];
    var _d = useState(initialDate !== null && initialDate !== void 0 ? initialDate : defaultDate), date = _d[0], setDate = _d[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var onPickerValueChange = useCallback(function (_, selectedDate) {
        setDate(function (currentDate) {
            var newDate = selectedDate !== null && selectedDate !== void 0 ? selectedDate : currentDate;
            if (onChange != null) {
                onChange(newDate);
                toggleModal();
            }
            return newDate;
        });
    }, [setDate, onChange, toggleModal]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()),
        modalActive ? (React.createElement(DateTimePicker, { value: date, mode: mode, is24Hour: true, minimumDate: minDate, maximumDate: maxDate, onChange: onPickerValueChange })) : null));
}
//# sourceMappingURL=index.android.js.map