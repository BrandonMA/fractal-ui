import React, { useCallback, useState } from 'react';
import { PickerProps } from './types/PickerProps';
import { PickerButton } from '../PickerButton';
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../hooks/useTheme';
import { PickerItem } from './PickerItem';
import { BasePicker } from './BasePicker';
import { BottomCellModal } from '../../modals/BottomCellModal';

export function Picker({ items, initialValue, onChange, ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange, index] = usePickerState(initialValue, items, onChange);
    const [modalActive, setModalActive] = useState(false);
    const { colors } = useTheme();

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <PickerItem color={colors.text} label={label} value={value} key={value} />;
        },
        [colors.text]
    );

    return (
        <>
            <PickerButton onPress={toggleModal} {...others}>
                {items[index][1]}
            </PickerButton>
            <BottomCellModal visible={modalActive} onDismiss={toggleModal}>
                <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                    {items.map(renderItem)}
                </BasePicker>
            </BottomCellModal>
        </>
    );
}
