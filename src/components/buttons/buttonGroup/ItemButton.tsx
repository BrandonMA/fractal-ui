import React from 'react';
import { Text } from '../../text';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { BaseButton } from '../BaseButton';
import { AnimationProps, FractalSharedProps } from '../../../sharedProps';

export interface ItemButtonProps extends FractalSharedProps, AnimationProps {
    text: string;
    textColor: string;
    pressedBackgroundColor: string;
    onPress?: () => void;
}

export function ItemButton({ text, textColor, ...others }: ItemButtonProps): JSX.Element {
    const { sizes } = useTheme();

    return (
        <BaseButton height={sizes.interactiveItemHeight} justifyContent='center' alignItems='center' {...others}>
            <Text variant='normal' color={textColor}>
                {text}
            </Text>
        </BaseButton>
    );
}
