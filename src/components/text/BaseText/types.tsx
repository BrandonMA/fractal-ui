import { TextProps as DefaultTexProps } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { AnimationProps } from '../../../styles/AnimationProps';
import { InlineStyles } from '../../../styles/InlineStyles';
import { TextStyles } from '../../../styles/TextStyles';
import { lightFractalTheme } from '../../../themes/lightFractalTheme';

export interface TextProps extends InlineStyles, AnimationProps, DefaultTexProps, TextStyles {
    children?: string;
    style?: any;
    variant: RequiredKeys<typeof lightFractalTheme.textStyles>;
}
