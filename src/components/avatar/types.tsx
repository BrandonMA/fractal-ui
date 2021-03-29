import { AnimationProps } from '../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../sharedProps/FractalSharedProps';

export interface AvatarProps extends FractalSharedProps, AnimationProps {
    source: string;
    size?: number;
}
