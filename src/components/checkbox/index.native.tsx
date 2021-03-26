import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Layer } from '../containers/Layer';
import { Text } from '../text';
import { Check } from './Check';
import { CheckBoxProps } from './types';

export function CheckBox({ value, onValueChange, label, ...others }: CheckBoxProps): JSX.Element {
    const { colors, spacings } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <TouchableOpacity onPress={handleValueChange}>
            <HorizontalLayer alignItems='center' {...others}>
                <Layer
                    width={20}
                    height={20}
                    borderRadius={4}
                    borderWidth={2}
                    borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Check value={value} />
                </Layer>
                <Text marginLeft={spacings.xs} variant='normal'>
                    {label}
                </Text>
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
