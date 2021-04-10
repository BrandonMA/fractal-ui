import React from 'react';
import { HorizontalLayer } from '../../../containers/HorizontalLayer';
import { Text } from '../../../text';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../../../buttons/TouchableOpacity';
import { BaseRadioButtonProps } from '../../types';
import { Radio } from '../Radio';

export function BaseRadioButton({ label, onPress, active }: BaseRadioButtonProps): JSX.Element {
    const { spacings } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <HorizontalLayer alignItems='center'>
                <Radio active={active} />
                {label && (
                    <Text marginLeft={spacings.xs} variant='normal'>
                        {label}
                    </Text>
                )}
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
