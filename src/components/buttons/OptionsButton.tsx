import React, { forwardRef } from 'react';
import { MoreHorizontalIcon } from '../../assets/MoreHorizontalIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';

interface OptionsButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}

const OptionsButton = forwardRef((props: OptionsButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return (
        <BaseButton ref={ref} height={24} width={24} justifyContent='center' alignItems='center' aria-label='Options' {...props}>
            <MoreHorizontalIcon height={24} width={24} fill={colors.text} />
        </BaseButton>
    );
});

OptionsButton.displayName = 'CrossButton';

export { OptionsButton };
