import React, { forwardRef } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';

interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}

const CloseButton = forwardRef(
    (props: CloseButtonProps, ref: any): JSX.Element => {
        const { colors } = useTheme();
        return (
            <BaseButton ref={ref} height={24} width={24} justifyContent='center' alignItems='center' {...props}>
                <CloseIcon height={24} width={24} fill={colors.text} />
            </BaseButton>
        );
    }
);

CloseButton.displayName = 'CloseButton';

export { CloseButton };
