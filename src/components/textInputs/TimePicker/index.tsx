import React, { useCallback, useState } from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { TimePickerProps } from './types/TimePickerProps';
import { normalizeHourValues } from './util/normalizeHourValues';

export function TimePicker({ onChange, initialDate, ...others }: TimePickerProps): JSX.Element {
    const { spacings } = useTheme();
    const defaultDate = new Date();
    defaultDate.setSeconds(0);

    const [date, setDate] = useState(initialDate ?? defaultDate);

    const hours = normalizeHourValues(numberToArray(24));
    const minutes: Array<[string, string]> = normalizeHourValues(numberToArray(59, true));

    const handleOnChange = useCallback(
        (date: Date) => {
            if (onChange != null) {
                onChange(date);
            }
        },
        [onChange]
    );

    const onHoursChange = useCallback(
        (pair) => {
            const hoursIndex = Number(pair[0]);
            setDate((currentDate) => {
                const newDate = new Date(currentDate);
                newDate.setHours(hoursIndex);
                handleOnChange(newDate);
                return newDate;
            });
        },
        [handleOnChange]
    );

    const onMinutesChange = useCallback(
        (pair) => {
            const minutesIndex = Number(pair[0]);
            setDate((currentDate) => {
                const newDate = new Date(currentDate);
                newDate.setMinutes(minutesIndex);
                handleOnChange(newDate);
                return newDate;
            });
        },
        [handleOnChange]
    );

    return (
        <HorizontalLayer {...others}>
            <Picker initialValue={date.getHours().toString()} items={hours} flex={1} onChange={onHoursChange} marginRight={spacings.xs} />
            <Picker initialValue={date.getMinutes().toString()} items={minutes} flex={1} onChange={onMinutesChange} />
        </HorizontalLayer>
    );
}
