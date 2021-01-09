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
import React, { useCallback, useMemo, useState } from 'react';
import { HorizontalView } from '../../containers';
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { getDaysInMonth } from './util/getDaysInMonth';
import { getYearsInRange } from './util/getYearsInRange';
import { localeMonthNames } from './util/localeMonthNames';
import { getMonthName } from './util/getMonthName';
export function DatePicker(_a) {
    var minDate = _a.minDate, maxDate = _a.maxDate, initialDate = _a.initialDate, onChange = _a.onChange, others = __rest(_a, ["minDate", "maxDate", "initialDate", "onChange"]);
    var finalMinDate = useMemo(function () { return minDate !== null && minDate !== void 0 ? minDate : new Date('Jan 1, 1920'); }, [minDate]);
    var _b = useState(initialDate !== null && initialDate !== void 0 ? initialDate : new Date()), date = _b[0], setDate = _b[1];
    var years = useMemo(function () { return getYearsInRange(maxDate !== null && maxDate !== void 0 ? maxDate : date, finalMinDate); }, [maxDate, date, finalMinDate]);
    var days = useMemo(function () {
        var amountOfDaysInMonth = getDaysInMonth(2021, date.getMonth());
        return numberToArray(amountOfDaysInMonth);
    }, [date]);
    var handleOnChange = useCallback(function (date) {
        if (onChange != null) {
            onChange(date);
        }
    }, [onChange]);
    var onYearChange = useCallback(function (pair) {
        var yearIndex = Number(pair[0]);
        setDate(function (currentDate) {
            var newDate = new Date(currentDate);
            newDate.setFullYear(yearIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    var onMonthChange = useCallback(function (pair) {
        var monthIndex = Number(pair[0]);
        setDate(function (currentDate) {
            var newDate = new Date(currentDate);
            newDate.setMonth(monthIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    var onDayChange = useCallback(function (pair) {
        var dayIndex = Number(pair[0]);
        setDate(function (currentDate) {
            var newDate = new Date(currentDate);
            newDate.setDate(dayIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    return (React.createElement(HorizontalView, __assign({}, others),
        React.createElement(Picker, { initialValue: date.getFullYear().toString(), items: years, flex: 1, onChange: onYearChange }),
        React.createElement(Picker, { initialValue: getMonthName(date), items: localeMonthNames, flex: 1, marginHorizontal: 'xs', onChange: onMonthChange }),
        React.createElement(Picker, { initialValue: date.getDate().toString(), items: days, flex: 1, onChange: onDayChange })));
}
//# sourceMappingURL=index.js.map