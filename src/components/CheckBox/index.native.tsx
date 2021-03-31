import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Layer } from '../containers/Layer';
import { Text } from '../text';
import { Check } from './Check';
import { CheckBoxProps } from './types';

export function CheckBox({ value, onValueChange, label, ...others }: CheckBoxProps): JSX.Element {
    const { colors, spacings, borderRadius, sizes } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <TouchableOpacity onPress={handleValueChange}>
            <HorizontalLayer alignItems='center' {...others}>
                <Layer
                    width={sizes.checkBoxSize}
                    height={sizes.checkBoxSize}
                    borderRadius={borderRadius.xs}
                    borderWidth={2}
                    borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
                    alignItems={'center'}
                    justifyContent={'center'}
                    overflow={'hidden'}
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
