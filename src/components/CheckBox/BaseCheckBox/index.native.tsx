import React from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { Check } from '../Check';
import { BaseCheckBoxProps } from '../types';

export function BaseCheckBox({ value, onValueChange, label }: BaseCheckBoxProps): JSX.Element {
    const { colors, spacings, borderRadius, sizes } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <TouchableOpacity onPress={handleValueChange}>
            <HorizontalLayer alignItems='center'>
                <Layer
                    width={sizes.checkBoxSize}
                    height={sizes.checkBoxSize}
                    borderWidth={2}
                    borderRadius={borderRadius.xs}
                    borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
                    overflow={'hidden'}
                    borderStyle={'solid'}
                >
                    <Check value={value} />
                </Layer>
                {label && (
                    <Text marginLeft={spacings.xs} variant='normal'>
                        {label}
                    </Text>
                )}
            </HorizontalLayer>
        </TouchableOpacity>
    );
}
