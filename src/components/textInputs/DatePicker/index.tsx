import React, { useCallback, useMemo, useState } from 'react';
import { Picker } from '../Picker';
import { DatePickerProps } from './types/DatePickerProps';
import { numberToArray } from '../util/numberToArray';
import { getDaysInMonth } from './util/getDaysInMonth';
import { getYearsInRange } from './util/getYearsInRange';
import { localeMonthNames } from './util/localeMonthNames';
import { Layer } from '../../containers';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { useTheme } from '../../../core/context/hooks/useTheme';

export function DatePicker({ minDate, maxDate, initialDate, onChange, ...others }: DatePickerProps): JSX.Element {
    const { spacings } = useTheme();
    const finalMinDate = useMemo(() => minDate ?? new Date('Jan 1, 1920'), [minDate]);
    const [date, setDate] = useState(initialDate ?? new Date());

    const years = useMemo(() => getYearsInRange(maxDate ?? date, finalMinDate), [maxDate, date, finalMinDate]);
    const days = useMemo(() => {
        const amountOfDaysInMonth = getDaysInMonth(2021, date.getMonth());
        return numberToArray(amountOfDaysInMonth);
    }, [date]);

    const handleOnChange = useCallback(
        (date: Date) => {
            if (onChange != null) {
                onChange(date);
            }
        },
        [onChange]
    );

    const onYearChange = useCallback(
        (pair) => {
            const yearIndex = Number(pair[0]);
            setDate((currentDate) => {
                const newDate = new Date(currentDate);
                newDate.setFullYear(yearIndex);
                handleOnChange(newDate);
                return newDate;
            });
        },
        [handleOnChange]
    );

    const onMonthChange = useCallback(
        (pair) => {
            const monthIndex = Number(pair[0]);
            setDate((currentDate) => {
                const newDate = new Date(currentDate);
                newDate.setMonth(monthIndex);
                handleOnChange(newDate);
                return newDate;
            });
        },
        [handleOnChange]
    );

    const onDayChange = useCallback(
        (pair) => {
            const dayIndex = Number(pair[0]);
            setDate((currentDate) => {
                const newDate = new Date(currentDate);
                newDate.setDate(dayIndex);
                handleOnChange(newDate);
                return newDate;
            });
        },
        [handleOnChange]
    );

    return (
        <Layer {...others}>
            <HorizontalLayer marginBottom={spacings.m}>
                <Picker initialValue={date.getFullYear().toString()} items={years} flex={1} onChange={onYearChange} isReadOnly />
                <Layer marginRight={spacings.m} />
                <Picker initialValue={date.getMonth().toString()} items={localeMonthNames} flex={1} onChange={onMonthChange} isReadOnly />
            </HorizontalLayer>
            <Picker initialValue={date.getDate().toString()} items={days} onChange={onDayChange} isReadOnly />
        </Layer>
    );
}
