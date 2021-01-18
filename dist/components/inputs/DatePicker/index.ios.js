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
import { BottomCellModal } from '../../modals/BottomCellModal';
import { PickerButton } from '../PickerButton';
import { DatePickerModalContent } from './components/DatePickerModalContent';
export function DatePicker(_a) {
    var initialDate = _a.initialDate, minDate = _a.minDate, maxDate = _a.maxDate, onChange = _a.onChange, iosDoneText = _a.iosDoneText, others = __rest(_a, ["initialDate", "minDate", "maxDate", "onChange", "iosDoneText"]);
    var _b = useState(false), modalActive = _b[0], setModalActive = _b[1];
    var _c = useState(initialDate !== null && initialDate !== void 0 ? initialDate : new Date()), date = _c[0], setDate = _c[1];
    var _d = useState(initialDate !== null && initialDate !== void 0 ? initialDate : new Date()), finalDate = _d[0], setFinalDate = _d[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var onPickerValueChange = useCallback(function (_, selectedDate) {
        setDate(function (currentDate) { return selectedDate !== null && selectedDate !== void 0 ? selectedDate : currentDate; });
    }, [setDate]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), finalDate.toLocaleDateString()),
        React.createElement(BottomCellModal, { visible: modalActive, onDismiss: toggleModal },
            React.createElement(DatePickerModalContent, { date: date, minDate: minDate, maxDate: maxDate, onPickerValueChange: onPickerValueChange, iosDoneText: iosDoneText, onFinalValueChange: setFinalDate, onChange: onChange }))));
}
//# sourceMappingURL=index.ios.js.map