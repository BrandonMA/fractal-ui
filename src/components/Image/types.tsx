import { AnimationProps } from '../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../sharedProps/FractalSharedProps';

export interface ImageProps extends FractalSharedProps, AnimationProps {
    source: string | number;
    style?: any;
    label?: string;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
