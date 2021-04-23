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
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { getDaysInMonth } from './util/getDaysInMonth';
import { getYearsInRange } from './util/getYearsInRange';
import { localeMonthNames } from './util/localeMonthNames';
import { Layer } from '../../containers';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { useTheme } from '../../../core/context/hooks/useTheme';
export function DatePicker(_a) {
    var { minDate, maxDate, initialDate, onChange } = _a, others = __rest(_a, ["minDate", "maxDate", "initialDate", "onChange"]);
    const { spacings } = useTheme();
    const finalMinDate = useMemo(() => minDate !== null && minDate !== void 0 ? minDate : new Date('Jan 1, 1920'), [minDate]);
    const [date, setDate] = useState(initialDate !== null && initialDate !== void 0 ? initialDate : new Date());
    const years = useMemo(() => getYearsInRange(maxDate !== null && maxDate !== void 0 ? maxDate : date, finalMinDate), [maxDate, date, finalMinDate]);
    const days = useMemo(() => {
        const amountOfDaysInMonth = getDaysInMonth(2021, date.getMonth());
        return numberToArray(amountOfDaysInMonth);
    }, [date]);
    const handleOnChange = useCallback((date) => {
        if (onChange != null) {
            onChange(date);
        }
    }, [onChange]);
    const onYearChange = useCallback((pair) => {
        const yearIndex = Number(pair[0]);
        setDate((currentDate) => {
            const newDate = new Date(currentDate);
            newDate.setFullYear(yearIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    const onMonthChange = useCallback((pair) => {
        const monthIndex = Number(pair[0]);
        setDate((currentDate) => {
            const newDate = new Date(currentDate);
            newDate.setMonth(monthIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    const onDayChange = useCallback((pair) => {
        const dayIndex = Number(pair[0]);
        setDate((currentDate) => {
            const newDate = new Date(currentDate);
            newDate.setDate(dayIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    return (React.createElement(Layer, Object.assign({}, others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m },
            React.createElement(Picker, { initialValue: date.getFullYear().toString(), items: years, flex: 1, onChange: onYearChange, isReadOnly: true }),
            React.createElement(Layer, { marginRight: spacings.m }),
            React.createElement(Picker, { initialValue: date.getMonth().toString(), items: localeMonthNames, flex: 1, onChange: onMonthChange, isReadOnly: true })),
        React.createElement(Picker, { initialValue: date.getDate().toString(), items: days, onChange: onDayChange, isReadOnly: true })));
}
//# sourceMappingURL=index.js.map