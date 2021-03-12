import React from 'react';
import { CheckIcon } from '../assets/CheckIcon';
import { Square } from '../assets/Square/index.native';
import { useTheme } from '../hooks/useTheme';
import { TouchableOpacity } from './buttons/TouchableOpacity';

interface CheckBoxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

export function CheckBox({ value, onValueChange, ...others }: CheckBoxProps): JSX.Element {
    const { colors } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <TouchableOpacity
            width={16}
            height={16}
            padding={0}
            borderRadius={4}
            onPress={handleValueChange}
            backgroundColor={value ? colors.mainInteractiveColor : 'transparent'}
            {...others}
        >
            {value ? <CheckIcon width={16} height={16} fill={colors.white} /> : <Square width={16} height={16} fill={colors.placeholder} />}
        </TouchableOpacity>
    );
}
