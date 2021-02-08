import { TextProps as DefaultTexProps } from 'react-native';
import { AnimationProps } from '../../styles/AnimationProps';
import { InlineStyles } from '../../styles/InlineStyles';
import { TextStyles } from '../../styles/TextStyles';

export interface TextProps extends InlineStyles, AnimationProps, DefaultTexProps, TextStyles {
    children?: string;
    style?: any;
}
