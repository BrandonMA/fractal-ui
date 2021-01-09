import React, { useCallback, useState } from 'react';
import { Index } from '../../modals/BottomCellModal';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerProps } from './types/DatePickerProps';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../themes/FractalTheme';

export function DatePicker({ initialDate, minDate, maxDate, onChange, iosDoneText, ...others }: DatePickerProps): JSX.Element {
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? new Date());
    const [finalDate, setFinalDate] = useState(initialDate ?? new Date());
    const { colors } = useTheme<FractalTheme>();

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
            <Index visible={modalActive} onDismiss={toggleModal}>
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display='spinner'
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={handleChange}
                    textColor={colors.textColor}
                />
                <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
            </Index>
        </>
    );
}
