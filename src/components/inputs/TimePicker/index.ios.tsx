import React, { useCallback, useState } from 'react';
import { Index } from '../../modals/BottomCellModal';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimePickerProps } from './types/TimePickerProps';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../themes/FractalTheme';

export function TimePicker({ onChange, iosDoneText, ...others }: TimePickerProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();

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
            <Index visible={modalActive} onDismiss={toggleModal}>
                <DateTimePicker
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    display='spinner'
                    onChange={handleChange}
                    textColor={colors.textColor}
                />
                <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
            </Index>
        </>
    );
}
