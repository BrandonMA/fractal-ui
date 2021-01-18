import React, { useCallback, useState } from 'react';
import { BottomCellModal } from '../../modals/BottomCellModal';
import { PickerButton } from '../PickerButton';
import { DatePickerProps } from './types/DatePickerProps';
import { DatePickerModalContent } from './components/DatePickerModalContent';

export function DatePicker({ initialDate, minDate, maxDate, onChange, iosDoneText, ...others }: DatePickerProps): JSX.Element {
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? new Date());
    const [finalDate, setFinalDate] = useState(initialDate ?? new Date());

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
                {finalDate.toLocaleDateString()}
            </PickerButton>
            <BottomCellModal visible={modalActive} onDismiss={toggleModal}>
                <DatePickerModalContent
                    date={date}
                    minDate={minDate}
                    maxDate={maxDate}
                    onPickerValueChange={onPickerValueChange}
                    iosDoneText={iosDoneText}
                    onFinalValueChange={setFinalDate}
                    onChange={onChange}
                />
            </BottomCellModal>
        </>
    );
}
