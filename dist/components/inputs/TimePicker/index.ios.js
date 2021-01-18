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
import { TimePickerModalContent } from './components/TimePickerModalContent';
export function TimePicker(_a) {
    var onChange = _a.onChange, iosDoneText = _a.iosDoneText, others = __rest(_a, ["onChange", "iosDoneText"]);
    var initialValue = new Date();
    initialValue.setSeconds(0);
    var _b = useState(initialValue), date = _b[0], setDate = _b[1];
    var _c = useState(initialValue), finalDate = _c[0], setFinalDate = _c[1];
    var _d = useState(false), modalActive = _d[0], setModalActive = _d[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var onPickerValueChange = useCallback(function (_, selectedDate) {
        setDate(function (currentDate) { return selectedDate !== null && selectedDate !== void 0 ? selectedDate : currentDate; });
    }, [setDate]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, __assign({ onPress: toggleModal }, others), finalDate.toLocaleTimeString()),
        React.createElement(BottomCellModal, { visible: modalActive, onDismiss: toggleModal },
            React.createElement(TimePickerModalContent, { date: date, onPickerValueChange: onPickerValueChange, iosDoneText: iosDoneText, onFinalValueChange: setFinalDate, onChange: onChange }))));
}
//# sourceMappingURL=index.ios.js.map