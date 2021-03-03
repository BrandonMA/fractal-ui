import { AnimationProps, FractalSharedProps } from '../../../sharedProps';
import { ReactNode } from 'react';

export interface TouchableOpacityProps extends FractalSharedProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    whileHover?: any;
    whileTap?: any;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
