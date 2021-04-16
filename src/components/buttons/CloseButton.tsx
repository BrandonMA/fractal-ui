import React, { forwardRef } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';

interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}

export const CloseButton = forwardRef(
    (props: CloseButtonProps, ref: any): JSX.Element => {
        const { colors } = useTheme();
        return (
            <BaseButton ref={ref} height={24} width={24} justifyContent='center' alignItems='center' {...props}>
                <CloseIcon height={24} width={24} fill={colors.text} />
            </BaseButton>
        );
    }
);
