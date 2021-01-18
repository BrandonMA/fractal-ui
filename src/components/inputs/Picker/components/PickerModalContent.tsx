import { Button } from '../../../buttons';
import React, { useCallback } from 'react';
import { BaseBox, BasePicker } from '../../../baseComponents';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../../themes';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { usePickerState } from '../hooks/usePickerState';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
import { PickerModalContentProps } from '../types/PickerModalContentProps';

export function PickerModalContent({
    items,
    onFinalIndexChange,
    onChange,
    initialValue,
    iosDoneText = 'OK'
}: PickerModalContentProps): JSX.Element {
    const [currentValue, handleValueChange, index] = usePickerState(initialValue, items);
    const { colors } = useTheme<FractalTheme>();
    const hideMoldalAnimated = useHideModalAnimated();

    const pickFinalValue = () => {
        onFinalIndexChange(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        hideMoldalAnimated();
    };

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <NativePicker.Item color={colors.textColor} label={label} value={value} key={value} />;
        },
        [colors.textColor]
    );

    return (
        <BaseBox>
            <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                {items.map(renderItem)}
            </BasePicker>
            <Button variant='mainInteractiveColor' onPress={pickFinalValue} text={iosDoneText} />
        </BaseBox>
    );
}
