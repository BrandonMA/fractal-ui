import React, { useCallback, useState } from 'react';
import { BottomCellModal } from '../../modals/BottomCellModal';
import { PickerButton } from '../PickerButton';
import { TimePickerProps } from './types/TimePickerProps';
import { TimePickerModalContent } from './components/TimePickerModalContent';

export function TimePicker({ onChange, iosDoneText, ...others }: TimePickerProps): JSX.Element {
    const initialValue = new Date();
    initialValue.setSeconds(0);

    const [date, setDate] = useState(initialValue);
    const [finalDate, setFinalDate] = useState(initialValue);
    const [modalActive, setModalActive] = useState(false);

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const onPickerValueChange = useCallback(
        (_, selectedDate) => {
            setDate((currentDate) => selectedDate ?? currentDate);
        },
        [setDate]
    );

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {finalDate.toLocaleTimeString()}
            </PickerButton>
            <BottomCellModal visible={modalActive} onDismiss={toggleModal}>
                <TimePickerModalContent
                    date={date}
                    onPickerValueChange={onPickerValueChange}
                    iosDoneText={iosDoneText}
                    onFinalValueChange={setFinalDate}
                    onChange={onChange}
                />
            </BottomCellModal>
        </>
    );
}
