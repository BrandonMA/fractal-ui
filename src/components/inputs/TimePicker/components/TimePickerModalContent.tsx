import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../../themes';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../../../buttons';
import React from 'react';

interface DatePickerModalContentProps {
    date: Date;
    onPickerValueChange: (_: any, selectedDate: Date) => void;
    iosDoneText?: string;
    onFinalValueChange: (date: Date) => void;
    onChange?: (date: Date) => void;
}

export function TimePickerModalContent({
    date,
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
                mode={'time'}
                is24Hour={true}
                display='spinner'
                onChange={onPickerValueChange}
                textColor={colors.textColor}
            />
            <Button variant='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} />
        </>
    );
}
