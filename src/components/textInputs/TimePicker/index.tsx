import React, { useCallback } from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { useControllableState } from '../../Slider/utils/useControllableState';
import { Picker } from '../Picker';
import { numberToArray } from '../util/numberToArray';
import { TimePickerProps } from './types/TimePickerProps';
import { normalizeHourValues } from './util/normalizeHourValues';

export function TimePicker({ value, onChange, initialDate = new Date(), ...others }: TimePickerProps): JSX.Element {
    initialDate.setSeconds(0);
    const { spacings } = useTheme();

    const [date, setDate] = useControllableState({ value, defaultValue: initialDate, onChange }); //useState(initialDate);

    const hours = normalizeHourValues(numberToArray(24));
    const minutes: Array<[string, string]> = normalizeHourValues(numberToArray(59, true));

    const onHoursChange = useCallback(
        (pair) => {
            const hoursIndex = Number(pair[0]);
            const newDate = new Date(date);
            newDate.setHours(hoursIndex);
            setDate(newDate);
        },
        [date, setDate]
    );

    const onMinutesChange = useCallback(
        (pair) => {
            const minutesIndex = Number(pair[0]);
            const newDate = new Date(date);
            newDate.setMinutes(minutesIndex);
            setDate(newDate);
        },
        [date, setDate]
    );

    return (
        <HorizontalLayer {...others}>
            <Picker value={date.getHours().toString()} items={hours} flex={1} onChange={onHoursChange} marginRight={spacings.xs} />
            <Picker value={date.getMinutes().toString()} items={minutes} flex={1} onChange={onMinutesChange} />
        </HorizontalLayer>
    );
}
