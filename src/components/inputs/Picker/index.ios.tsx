import React, { useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { Index } from '../../modals/BottomCellModal';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import { BaseBox } from '../../baseComponents';

export function Picker({ items, onChange, initialValue, iosDoneText, ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange, index] = usePickerState(initialValue, items);
    const { colors } = useTheme<FractalTheme>();
    const [finalIndex, setFinalIndex] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const pickFinalValue = () => {
        setFinalIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        toggleModal();
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
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {items[finalIndex][1]}
            </PickerButton>
            <Index visible={modalActive} onDismiss={toggleModal}>
                <BaseBox>
                    <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                        {items.map(renderItem)}
                    </BasePicker>
                    <Button variant='mainInteractiveColor' onPress={pickFinalValue} text={iosDoneText} />
                </BaseBox>
            </Index>
        </>
    );
}
