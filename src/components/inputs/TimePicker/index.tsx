import React, { useCallback, useState } from 'react';
import { HorizontalView } from '../../containers';
import { Picker } from '../Picker';
import { TimePickerProps } from './types/TimePickerProps';
import { numberToArray } from '../util/numberToArray';
import { normalizeHourValues } from './util/normalizeHourValues';

export function TimePicker({ onChange, ...others }: TimePickerProps): JSX.Element {
    const [date, setDate] = useState(new Date());

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
        <HorizontalView {...others}>
            <Picker initialValue={date.getHours().toString()} items={hours} flex={1} onChange={onHoursChange} marginRight={'xs'} />
            <Picker initialValue={date.getMinutes().toString()} items={minutes} flex={1} onChange={onMinutesChange} />
        </HorizontalView>
    );
}
