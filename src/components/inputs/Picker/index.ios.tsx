import React, { useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { BottomCellModal } from '../../modals/BottomCellModal';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Button } from '../../buttons/Button';
import { PickerButton } from '../PickerButton';
import { BaseBox } from '../../baseComponents';

export function Picker(props: PickerProps): JSX.Element {
    const { items, onChange, initialValue, iosDoneText, ...others } = props;
    const [currentValue, handleValueChange, index] = usePickerState(initialValue, items);
    const theme = useTheme<FractalTheme>();
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
            return <NativePicker.Item color={theme.colors.textColor} label={label} value={value} key={value} />;
        },
        [theme.colors.textColor]
    );

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {items[finalIndex][1]}
            </PickerButton>
            <BottomCellModal visible={modalActive} onDismiss={toggleModal}>
                <BaseBox>
                    <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                        {items.map(renderItem)}
                    </BasePicker>
                    <Button variant='mainInteractiveColor' onPress={pickFinalValue} text={iosDoneText} />
                </BaseBox>
            </BottomCellModal>
        </>
    );
}
