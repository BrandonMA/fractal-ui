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
import { HorizontalView } from '../../containers';
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { normalizeHourValues } from './util/normalizeHourValues';
export function TimePicker(props) {
    var onChange = props.onChange, others = __rest(props, ["onChange"]);
    var _a = useState(new Date()), date = _a[0], setDate = _a[1];
    var hours = normalizeHourValues(numberToArray(24));
    var minutes = normalizeHourValues(numberToArray(59, true));
    var handleOnChange = useCallback(function (date) {
        if (onChange != null) {
            onChange(date);
        }
    }, [onChange]);
    var onHoursChange = useCallback(function (pair) {
        var hoursIndex = Number(pair[0]);
        setDate(function (currentDate) {
            var newDate = new Date(currentDate);
            newDate.setHours(hoursIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    var onMinutesChange = useCallback(function (pair) {
        var minutesIndex = Number(pair[0]);
        setDate(function (currentDate) {
            var newDate = new Date(currentDate);
            newDate.setMinutes(minutesIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    return (React.createElement(HorizontalView, __assign({}, others),
        React.createElement(Picker, { initialValue: date.getHours().toString(), items: hours, flex: 1, onChange: onHoursChange, marginRight: 'xs' }),
        React.createElement(Picker, { initialValue: date.getMinutes().toString(), items: minutes, flex: 1, onChange: onMinutesChange })));
}
//# sourceMappingURL=index.js.map