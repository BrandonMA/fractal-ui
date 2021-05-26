import React from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}
declare const CrossButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<unknown>>;
export { CrossButton };
