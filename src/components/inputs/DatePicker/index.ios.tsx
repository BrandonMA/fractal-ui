import React, { useCallback, useEffect, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { DatePickerProps } from './types/DatePickerProps';
import { BlurrediOSModal } from '../../modals/BlurrediOSModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../themes';

export function DatePicker({
    initialDate,
    mode = 'date',
    minDate,
    maxDate,
    onChange,
    iosDoneText = 'Done',
    ...others
}: DatePickerProps): JSX.Element {
    const defaultDate = new Date();
    defaultDate.setSeconds(0);

    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? defaultDate);
    const { colors } = useTheme<FractalTheme>();
    const [textColor, setTextColor] = useState('black');

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const onPickerValueChange = useCallback(
        (_, selectedDate) => {
            setDate((currentDate) => {
                const newDate = selectedDate ?? currentDate;
                if (onChange != null) {
                    onChange(newDate);
                }
                return newDate;
            });
        },
        [setDate, onChange]
    );

    useEffect(() => {
        // Further info on the bug: https://github.com/react-native-datetimepicker/datetimepicker/issues/308
        // This is really not performant so check constanly if the bug is fixed.
        if (modalActive) {
            setTimeout(() => {
                setTextColor(colors.textColor);
            }, 100);
        } else {
            setTextColor('black');
        }
    }, [modalActive, colors]);

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString()}
            </PickerButton>
            <BlurrediOSModal dismissText={iosDoneText} visible={modalActive} onDismiss={toggleModal}>
                <DateTimePicker
                    value={date}
                    mode={mode}
                    display='spinner'
                    is24Hour
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={onPickerValueChange}
                    textColor={textColor}
                />
            </BlurrediOSModal>
        </>
    );
}
