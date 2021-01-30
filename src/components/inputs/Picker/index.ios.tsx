import React, { useCallback, useState } from 'react';
import { PickerProps } from './types/PickerProps';
import { PickerButton } from '../PickerButton';
import { BlurrediOSModal } from '../../modals/BlurrediOSModal';
import { usePickerState } from './hooks/usePickerState';
import { FractalTheme } from '../../../themes/FractalTheme';
import { useTheme } from '@shopify/restyle';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { BasePicker } from '../../baseComponents/BasePicker';

export function Picker({ items, initialValue, onChange, iosDoneText = 'Done', ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange, index] = usePickerState(initialValue, items, onChange);
    const [modalActive, setModalActive] = useState(false);
    const { colors } = useTheme<FractalTheme>();

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

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
                {items[index][1]}
            </PickerButton>
            <BlurrediOSModal dismissText={iosDoneText} visible={modalActive} onDismiss={toggleModal}>
                <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                    {items.map(renderItem)}
                </BasePicker>
            </BlurrediOSModal>
        </>
    );
}
