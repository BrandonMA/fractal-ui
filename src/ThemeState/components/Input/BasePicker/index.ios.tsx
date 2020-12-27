import React, { useCallback } from 'react';
import { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import { useThemeColor } from '../../../hooks/useThemeColor';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { BaseCell } from '../../Containers';
import { BaseButton } from '../../Interactive';
import { BasePickerProps } from './types/BasePickerProps';
import { useBasePickerState } from './hooks/useBasePickerState';

interface StyledTextInputProps {
    backgroundColor: string;
    textColor: string;
}

const StyledContainer = styled(Pressable)`
    background-color: ${(props: StyledTextInputProps) => props.backgroundColor};
    border-radius: 12px;
    height: 44px;
    padding: 12px;
    justify-content: center;
`;

const StyledText = styled.Text`
    font-size: 14px;
    color: ${(props: StyledTextInputProps) => props.textColor};
`;

const StyledIconContainer = styled.View`
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
`;

const ModalContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-end;
`;

const BackgroundModal = styled(Pressable)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
`;

interface CircularCloseButtonProps {
    backgroundColor: string;
}

const CircularCloseButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    background-color: ${(props: CircularCloseButtonProps) => props.backgroundColor};
`;

export function BasePicker(props: BasePickerProps): JSX.Element {
    const { items, onChange, iosDoneText } = props;
    const [currentValue, handleValueChange, index] = useBasePickerState(items);
    const [finalIndex, setFinalIndex] = useState(0);
    const fieldColor = useThemeColor('fieldColor');
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
            <StyledContainer backgroundColor={fieldColor.base400} onPress={toggleModal}>
                <StyledText textColor={fieldColor.base900}>{items[finalIndex][1]}</StyledText>
                <StyledIconContainer>
                    <Entypo name='chevron-down' size={21} color={fieldColor.base300} />
                </StyledIconContainer>
            </StyledContainer>
            <Modal visible={modalActive} animationType='fade' transparent>
                <ModalContainer>
                    <BackgroundModal onPress={toggleModal} />
                    <BaseCell>
                        <CircularCloseButton backgroundColor={fieldColor.base400} onPress={toggleModal}>
                            <Entypo name='cross' size={21} color={fieldColor.base300} />
                        </CircularCloseButton>
                        <Picker itemStyle={{ height: 160 }} selectedValue={currentValue} onValueChange={handleValueChange}>
                            {items.map((item) => (
                                <Picker.Item color={fieldColor.base900} label={item[1]} value={item[0]} key={item[0]} />
                            ))}
                        </Picker>
                        <BaseButton colorStyle='mainInteractiveColor' text={iosDoneText} onPress={pickFinalValue} removeShadow />
                    </BaseCell>
                </ModalContainer>
            </Modal>
        </>
    );
}
