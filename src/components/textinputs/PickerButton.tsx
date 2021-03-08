import React from 'react';
import { Text } from '../text';
import { useTheme } from '../../hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
import { Layer } from '../containers';
import { ChevronDown } from '../../assets/ChevronDown';

export interface PickerButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    children: string;
}

export function PickerButton({ children, ...others }: PickerButtonProps): JSX.Element {
    const { sizes, spacings, borderRadius, colors } = useTheme();

    return (
        <TouchableOpacity
            flexDirection='row'
            justifyContent='center'
            paddingLeft={spacings.s}
            paddingRight={spacings.s}
            borderRadius={borderRadius.s}
            height={sizes.textFieldHeight}
            backgroundColor={colors.textField}
            {...others}
        >
            <Layer flexGrow={1} height={'100%'} justifyContent={'center'}>
                <Text variant={'normal'} alignSelf={'flex-start'} fontSize={14} fontWeight={400}>
                    {children}
                </Text>
            </Layer>
            <Layer alignSelf='center'>
                <ChevronDown width={21} fill={colors.placeholder} />
            </Layer>
        </TouchableOpacity>
    );
}