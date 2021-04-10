import { TextProps as DefaultTexProps } from 'react-native';
import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
import { TextProps as FractalTextProps } from '../../../sharedProps/TextProps';
import { FractalThemeTextVariants } from '../../../themes/FractalTheme';
import { RequiredKeys } from 'utility-types';
export interface TextProps extends FractalSharedProps, AnimationProps, DefaultTexProps, FractalTextProps {
    children?: string;
    style?: any;
    variant: RequiredKeys<FractalThemeTextVariants>;
}
