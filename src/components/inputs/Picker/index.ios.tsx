import React, { memo, useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { Text } from '../../Text';
import { BaseBox } from '../../baseComponents/BaseBox';
import { ModalCell } from '../../ModalCell';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { BaseTouchableOpacity } from '../../baseComponents/BaseTouchableOpacity';
import { Button } from '../../buttons/Button';

const Entypo = memo(BaseEntypo);

export function Picker(props: PickerProps): JSX.Element {
    const { items, onChange, iosDoneText, ...others } = props;
    const [currentValue, handleValueChange, index] = usePickerState(items);
    const theme = useTheme<FractalTheme>();
    const [finalIndex, setFinalIndex] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const toggleModal = useCallback(() => setModalActive((current) => !current), [setModalActive]);

    const pickFinalValue = useCallback(() => {
        setFinalIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        toggleModal();
    }, [setFinalIndex, index, toggleModal, onChange, items]);

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <NativePicker.Item color={theme.colors.black} label={label} value={value} key={value} />;
        },
        [theme.colors.black]
    );

    return (
        <>
            <BaseTouchableOpacity
                flexDirection='row'
                justifyContent='center'
                paddingHorizontal='s'
                borderRadius='textFieldRadius'
                height={theme.interactiveItems.textFieldHeight}
                backgroundColor='textFieldColor'
                onPress={toggleModal}
                {...others}
            >
                <BaseBox flexGrow={1} justifyContent='center'>
                    <Text fontSize={14}>{items[finalIndex][1]}</Text>
                </BaseBox>
                <BaseBox alignSelf='center'>
                    <Entypo name='chevron-down' size={21} color={theme.colors.placeholderColor} />
                </BaseBox>
            </BaseTouchableOpacity>
            <ModalCell visible={modalActive} animationType='fade' transparent onDismiss={toggleModal} justifyContent='flex-end'>
                <BasePicker selectedValue={currentValue} onValueChange={handleValueChange}>
                    {items.map(renderItem)}
                </BasePicker>
                <Button variant='mainInteractiveColor' onPress={pickFinalValue} text={iosDoneText} />
            </ModalCell>
        </>
    );
}
