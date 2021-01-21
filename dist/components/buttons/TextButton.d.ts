/// <reference types="react" />
import { BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonColorVariant } from './types/ButtonColorVariant';
import { TitleColorVariant } from './types/TitleColorVariant';
export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: string;
    textProps?: Omit<BaseTextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    variant?: ButtonColorVariant | TitleColorVariant | 'navigationBarButtonColor';
}
export declare function TextButton({ leftIcon, rightIcon, children, textProps, variant, ...others }: TextButtonProps): JSX.Element;
