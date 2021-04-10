import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
import { PlaceholderProps } from '../../../sharedProps/PlaceholderProps';
import { TextProps as FractalTextProps } from '../../../sharedProps/TextProps';

interface BaseTextInputProps {
    onChangeText?: (text: string) => void;
    value?: string;
    placeholder?: string;
}

export interface TextFieldProps extends FractalSharedProps, AnimationProps, BaseTextInputProps, FractalTextProps, PlaceholderProps {
    style?: any;
}
