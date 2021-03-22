import React from 'react';
import { CheckIcon } from '../assets/CheckIcon';
import { SquareIcon } from '../assets/SquareIcon/index.native';
import { useTheme } from '../core/context/hooks/useTheme';
import { TouchableOpacity } from './buttons/TouchableOpacity';
import { HorizontalLayer } from './containers/HorizontalLayer';
import { LayerProps } from './containers/Layer/types';
import { Text } from './text';

interface CheckBoxProps extends Omit<LayerProps, 'children'> {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label: string;
}

export function CheckBox({ value, onValueChange, label, ...others }: CheckBoxProps): JSX.Element {
    const { colors, spacings } = useTheme();

    const handleValueChange = (): void => {
        onValueChange(!value);
    };

    return (
        <HorizontalLayer alignItems='center' {...others}>
            <TouchableOpacity
                width={16}
                height={16}
                padding={0}
                borderRadius={4}
                onPress={handleValueChange}
                backgroundColor={value ? colors.mainInteractiveColor : 'transparent'}
            >
                {value ? (
                    <CheckIcon width={16} height={16} fill={colors.white} />
                ) : (
                    <SquareIcon width={16} height={16} fill={colors.placeholder} />
                )}
            </TouchableOpacity>
            <Text marginLeft={spacings.xs} variant='normal'>
                {label}
            </Text>
        </HorizontalLayer>
    );
}
