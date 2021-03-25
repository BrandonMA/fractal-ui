import React from 'react';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Text } from '../../text';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { RadioButtonProps } from '../types';
import { Radio } from './Radio';

export function RadioButton({ label, onPress, active, ...others }: RadioButtonProps): JSX.Element {
    const { spacings } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <HorizontalLayer alignItems='center' {...others}>
                <Radio active={active} />
                <Text marginLeft={spacings.xs} variant='normal'>
                    {label}
                </Text>
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
