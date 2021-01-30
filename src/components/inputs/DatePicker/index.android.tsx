import React, { useCallback, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { DatePickerProps } from './types/DatePickerProps';
import DateTimePicker from '@react-native-community/datetimepicker';

export function DatePicker({ initialDate, mode = 'date', minDate, maxDate, onChange, ...others }: DatePickerProps): JSX.Element {
    const defaultDate = new Date();
    defaultDate.setSeconds(0);

    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? defaultDate);

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const onPickerValueChange = useCallback(
        (_, selectedDate) => {
            setDate((currentDate) => {
                const newDate = selectedDate ?? currentDate;
                if (onChange != null) {
                    onChange(newDate);
                    toggleModal();
                }
                return newDate;
            });
        },
        [setDate, onChange, toggleModal]
    );

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()}
            </PickerButton>
            {modalActive ? (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={onPickerValueChange}
                />
            ) : null}
        </>
    );
}
