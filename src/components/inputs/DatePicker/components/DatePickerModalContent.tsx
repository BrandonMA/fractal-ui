import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../../themes';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../../../buttons';
import React from 'react';

interface DatePickerModalContentProps {
    date: Date;
    minDate?: Date;
    maxDate?: Date;
    onPickerValueChange: (_: any, selectedDate: Date) => void;
    iosDoneText?: string;
    onFinalValueChange: (date: Date) => void;
    onChange?: (date: Date) => void;
}

export function DatePickerModalContent({
    date,
    minDate,
    maxDate,
    onPickerValueChange,
    iosDoneText,
    onFinalValueChange,
    onChange
}: DatePickerModalContentProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    const hideModalAnimated = useHideModalAnimated();

    const pickFinalValue = () => {
        onFinalValueChange(date);
        if (onChange != null) {
            onChange(date);
        }
        hideModalAnimated();
    };

    return (
        <>
            <DateTimePicker
                value={date}
                mode={'date'}
                display='spinner'
                minimumDate={minDate}
                maximumDate={maxDate}
                onChange={onPickerValueChange}
                textColor={colors.textColor}
            />
            <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
        </>
    );
}
