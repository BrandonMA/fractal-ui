import React, { useCallback, useState } from 'react';
import { ModalCell } from '../../ModalCell';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerProps } from './types/DatePickerProps';

export function DatePicker(props: DatePickerProps): JSX.Element {
    const { initialDate, onChange, iosDoneText, ...others } = props;
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? new Date());
    const [finalDate, setFinalDate] = useState(initialDate ?? new Date());

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const handleChange = useCallback(
        (_, selectedDate) => {
            setDate((currentDate) => selectedDate ?? currentDate);
        },
        [setDate]
    );

    const pickFinalValue = () => {
        setFinalDate(date);
        if (onChange != null) {
            onChange(date);
        }
        toggleModal();
    };

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {finalDate.toLocaleDateString()}
            </PickerButton>
            <ModalCell visible={modalActive} animationType='fade' transparent onDismiss={toggleModal} justifyContent='flex-end'>
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display='spinner'
                    onChange={handleChange}
                />
                <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
            </ModalCell>
        </>
    );
}
