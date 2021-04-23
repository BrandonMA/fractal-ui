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
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { normalizeHourValues } from './util/normalizeHourValues';
export function TimePicker(_a) {
    var { onChange, initialDate } = _a, others = __rest(_a, ["onChange", "initialDate"]);
    const { spacings } = useTheme();
    const defaultDate = new Date();
    defaultDate.setSeconds(0);
    const [date, setDate] = useState(initialDate !== null && initialDate !== void 0 ? initialDate : defaultDate);
    const hours = normalizeHourValues(numberToArray(24));
    const minutes = normalizeHourValues(numberToArray(59, true));
    const handleOnChange = useCallback((date) => {
        if (onChange != null) {
            onChange(date);
        }
    }, [onChange]);
    const onHoursChange = useCallback((pair) => {
        const hoursIndex = Number(pair[0]);
        setDate((currentDate) => {
            const newDate = new Date(currentDate);
            newDate.setHours(hoursIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    const onMinutesChange = useCallback((pair) => {
        const minutesIndex = Number(pair[0]);
        setDate((currentDate) => {
            const newDate = new Date(currentDate);
            newDate.setMinutes(minutesIndex);
            handleOnChange(newDate);
            return newDate;
        });
    }, [handleOnChange]);
    return (React.createElement(HorizontalLayer, Object.assign({}, others),
        React.createElement(Picker, { initialValue: date.getHours().toString(), items: hours, flex: 1, onChange: onHoursChange, marginRight: spacings.xs }),
        React.createElement(Picker, { initialValue: date.getMinutes().toString(), items: minutes, flex: 1, onChange: onMinutesChange })));
}
//# sourceMappingURL=index.js.map