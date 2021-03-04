import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
import { TextProps as FractalTextProps } from '../../../sharedProps/TextProps';

interface BaseTextInputProps {
    onChangeText?: (text: string) => void;
    placeholderTextColor?: string;
    value?: string;
    placeholder?: string;
}

export interface TextFieldProps extends FractalSharedProps, AnimationProps, BaseTextInputProps, FractalTextProps {
    style?: any;
}
