import React from 'react';
import { CloseIcon } from '../assets/CloseIcon';
import { useTheme } from '../core/context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../sharedProps';
import { BaseButton } from './buttons/BaseButton';

interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}

export function CloseButton(props: CloseButtonProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <BaseButton height={24} width={24} justifyContent='center' alignItems='center' {...props}>
            <CloseIcon height={24} width={24} fill={colors.text} />
        </BaseButton>
    );
}
