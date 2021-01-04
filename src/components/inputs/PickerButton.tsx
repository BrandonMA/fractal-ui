import React, { memo } from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { Text } from '../Text';
import { BaseBox } from '../baseComponents/BaseBox';
import { BaseTouchableOpacity, BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';

const Entypo = memo(BaseEntypo);

export interface PickerButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children: string;
}

export function PickerButton(props: PickerButtonProps): JSX.Element {
    const { children, ...others } = props;
    const theme = useTheme<FractalTheme>();

    return (
        <>
            <BaseTouchableOpacity
                flexDirection='row'
                justifyContent='center'
                paddingHorizontal='s'
                borderRadius='textFieldRadius'
                height={theme.interactiveItems.textFieldHeight}
                backgroundColor='textFieldColor'
                {...others}
            >
                <BaseBox flexGrow={1} justifyContent='center'>
                    <Text fontSize={14}>{children}</Text>
                </BaseBox>
                <BaseBox alignSelf='center'>
                    <Entypo name='chevron-down' size={21} color={theme.colors.placeholderColor} />
                </BaseBox>
            </BaseTouchableOpacity>
        </>
    );
}
