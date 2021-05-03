import React, { forwardRef } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
import { Layer } from '../containers';
import { ChevronDownIcon } from '../../assets/ChevronDownIcon';

export interface PickerButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    children: string;
}

const PickerButton = forwardRef(
    ({ children, ...others }: PickerButtonProps, ref: any): JSX.Element => {
        const { sizes, spacings, borderRadius, colors } = useTheme();

        return (
            <TouchableOpacity
                ref={ref}
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
                    <ChevronDownIcon width={21} fill={colors.placeholder} />
                </Layer>
            </TouchableOpacity>
        );
    }
);

PickerButton.displayName = 'PickerButton';

export { PickerButton };
