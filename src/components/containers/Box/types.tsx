import { ReactNode } from 'react';
import { AnimationProps } from '../../../styles/AnimationProps';
import { InlineStyles } from '../../../styles/InlineStyles';

export interface BoxProps extends InlineStyles, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
}
