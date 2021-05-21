import { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';

export interface ChipProps extends FractalSharedProps, AnimationProps {
    text?: string;
    children?: ReactNode;
}
