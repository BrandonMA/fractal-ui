import React, { useCallback, useState } from 'react';
import { ModalCell } from '../../ModalCell';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerProps } from './types/DatePickerProps';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../themes/FractalTheme';

export function DatePicker(props: DatePickerProps): JSX.Element {
    const { initialDate, minDate, maxDate, onChange, iosDoneText, ...others } = props;
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useState(initialDate ?? new Date());
    const [finalDate, setFinalDate] = useState(initialDate ?? new Date());
    const theme = useTheme<FractalTheme>();

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
            <ModalCell
                visible={modalActive}
                alignItems={'center'}
                animationType='fade'
                transparent
                onDismiss={toggleModal}
                justifyContent='flex-end'
            >
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display='spinner'
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onChange={handleChange}
                    textColor={theme.colors.textColor}
                />
                <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
            </ModalCell>
        </>
    );
}
