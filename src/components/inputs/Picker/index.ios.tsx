import React, { memo, useCallback, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { Text } from '../../Text';
import { BaseBox } from '../../baseComponents/BaseBox';
import { Modal } from 'react-native';
import { BaseSafeAreaView } from '../../baseComponents/BaseSafeAreaView';
import { BasePressable } from '../../baseComponents/BasePressable';
import { Cell } from '../../containers/Cell';
import { BasePicker } from '../../baseComponents/BasePicker';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { BaseTouchableOpacity } from '../../baseComponents';
import { PaddedContainer } from '../../containers';
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

    return (
        <>
            <BasePressable
                flexDirection='row'
                justifyContent='center'
                paddingHorizontal='s'
                borderRadius='m'
                height={theme.interactiveItems.height}
                backgroundColor='background'
                onPress={toggleModal}
                {...others}
            >
                <BaseBox flexGrow={1} justifyContent='center'>
                    <Text fontSize={14}>{items[finalIndex][1]}</Text>
                </BaseBox>
                <BaseBox position='absolute' top={0} right={0} bottom={0} justifyContent='center' alignItems='center' paddingRight='s'>
                    <Entypo name='chevron-down' size={21} color={theme.colors.placeholderColor} />
                </BaseBox>
            </BasePressable>
            <Modal visible={modalActive} animationType='fade' transparent>
                <BaseSafeAreaView flex={1} justifyContent='flex-end'>
                    <BasePressable
                        onPress={toggleModal}
                        position='absolute'
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        backgroundColor='black'
                        opacity={0.6}
                    />
                    <PaddedContainer>
                        <Cell>
                            <BaseTouchableOpacity
                                justifyContent='center'
                                alignItems='center'
                                backgroundColor='background'
                                alignSelf='flex-end'
                                width={32}
                                height={32}
                                borderRadius='l'
                                onPress={toggleModal}
                            >
                                <Entypo name='cross' size={21} color={theme.colors.placeholderColor} />
                            </BaseTouchableOpacity>
                            <BasePicker itemStyle={{ height: 160 }} selectedValue={currentValue} onValueChange={handleValueChange}>
                                {items.map((item) => (
                                    <NativePicker.Item color={theme.colors.textColor} label={item[1]} value={item[0]} key={item[0]} />
                                ))}
                            </BasePicker>
                            <Button variant='mainInteractiveColor' onPress={pickFinalValue} text={iosDoneText} />
                        </Cell>
                    </PaddedContainer>
                </BaseSafeAreaView>
            </Modal>
        </>
    );
}
