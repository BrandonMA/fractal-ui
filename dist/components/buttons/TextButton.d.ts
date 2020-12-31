/// <reference types="react" />
import { BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonVariant } from './types/ButtonVariant';
import { TitleButtonVariant } from './types/TitleButtonVariant';
export interface TextButtonProps extends Omit<BaseTouchableOpacityProps, 'children'> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text: string;
    variant: ButtonVariant | TitleButtonVariant;
}
export declare function TextButton(props: TextButtonProps): JSX.Element;
