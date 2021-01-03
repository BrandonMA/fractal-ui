import React, { useCallback, useState } from 'react';
import { ModalCell } from '../../ModalCell';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimePickerProps } from './types/TimePickerProps';

export function TimePicker(props: TimePickerProps): JSX.Element {
    const { onChange, iosDoneText, ...others } = props;

    const initialValue = new Date();
    initialValue.setSeconds(0);

    const [date, setDate] = useState(initialValue);
    const [finalDate, setFinalDate] = useState(initialValue);
    const [modalActive, setModalActive] = useState(false);

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
                {finalDate.toLocaleTimeString()}
            </PickerButton>
            <ModalCell visible={modalActive} animationType='fade' transparent onDismiss={toggleModal} justifyContent='flex-end'>
                <DateTimePicker value={date} mode={'time'} is24Hour={true} display='spinner' onChange={handleChange} />
                <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
            </ModalCell>
        </>
    );
}
