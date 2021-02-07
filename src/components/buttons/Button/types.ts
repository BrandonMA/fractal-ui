import { AnimationProps } from '../../../styles/AnimationProps';
import { InlineStyles } from '../../../styles/InlineStyles';

export type ButtonVariant = 'main';

export interface ButtonProps extends InlineStyles, AnimationProps {
    children?: JSX.Element | Array<JSX.Element>;
    onPress?: () => void;
    variant: ButtonVariant;
}
