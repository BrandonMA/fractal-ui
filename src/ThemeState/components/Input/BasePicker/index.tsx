import React, { memo } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Platform, View } from 'react-native';
import { useThemeColor } from '../../../hooks/useThemeColor';
import styled from 'styled-components/native';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { BasePickerProps } from './types/BasePickerProps';
import { useBasePickerState } from './hooks/useBasePickerState';

const Entypo = memo(BaseEntypo);

interface StyledTextInputProps {
    bg: string;
}

let StyledPicker = styled(Picker)`
    background-color: ${(props: StyledTextInputProps) => props.bg};
    border-radius: 12px;
    height: 44px;
    border: none;
    font-size: 14px;
    padding: 12px;
    ${getCursorStyle}
`;

if (Platform.OS === 'web') {
    StyledPicker = styled(StyledPicker)`
        -webkit-appearance: ${Platform.OS === 'web' ? 'none' : undefined};
        -moz-appearance: ${Platform.OS === 'web' ? 'none' : undefined};
    `;
}

const StyledIconContainer = styled.View`
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
`;

export function BasePicker(props: BasePickerProps): JSX.Element {
    const { items, onChange } = props;
    const [currentValue, handleValueChange] = useBasePickerState(items, onChange);
    const fieldColor = useThemeColor('fieldColor');

    return (
        <View>
            <StyledPicker
                selectedValue={currentValue}
                bg={fieldColor.base400}
                dropdownIconColor={fieldColor.base300}
                onValueChange={handleValueChange}
            >
                {items.map((item) => (
                    <Picker.Item label={item[1]} value={item[0]} key={item[0]} />
                ))}
            </StyledPicker>
            <StyledIconContainer>
                <Entypo name='chevron-down' size={21} color={fieldColor.base300} />
            </StyledIconContainer>
        </View>
    );
}
