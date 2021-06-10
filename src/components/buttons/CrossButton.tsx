import React, { forwardRef } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';
import { getCrossButtonAccessibilityProps } from './accessibility/getCrossButtonAccessibilityProps';

interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}

const CrossButton = forwardRef((props: CloseButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return (
        <BaseButton
            ref={ref}
            height={24}
            width={24}
            justifyContent='center'
            alignItems='center'
            {...getCrossButtonAccessibilityProps()}
            {...props}
        >
            <CloseIcon height={24} width={24} fill={colors.text} />
        </BaseButton>
    );
});

CrossButton.displayName = 'CrossButton';

export { CrossButton };
