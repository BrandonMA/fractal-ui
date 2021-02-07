import { AnimationProps } from '../../../styles/AnimationProps';
import { InlineStyles } from '../../../styles/InlineStyles';

export interface BoxProps extends InlineStyles, AnimationProps {
    children?: JSX.Element | Array<JSX.Element>;
}
