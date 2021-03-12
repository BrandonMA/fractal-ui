import React from 'react';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { useTheme } from '../../hooks/useTheme';
import { Radio } from './Radio';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { RadioButtonProps } from './types';

export function RadioButton({ label, onPress, active, ...others }: RadioButtonProps): JSX.Element {
    const { spacings, colors } = useTheme();
    return (
        <HorizontalLayer alignItems='center' {...others}>
            <TouchableOpacity onPress={onPress}>
                <Radio active={active} activeColor={colors.mainInteractiveColor} inactiveColor={colors.placeholder} />
            </TouchableOpacity>
            <Text marginLeft={spacings.xs} variant='normal'>
                {label}
            </Text>
        </HorizontalLayer>
    );
}
