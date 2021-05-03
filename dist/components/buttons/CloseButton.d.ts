import React from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}
declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<unknown>>;
export { CloseButton };
