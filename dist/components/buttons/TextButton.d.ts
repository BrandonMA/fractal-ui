/// <reference types="react" />
import { BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonColorVariant } from './types/ButtonColorVariant';
import { TitleColorVariant } from './types/TitleColorVariant';
export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text?: string;
    variant?: ButtonColorVariant | TitleColorVariant | 'navigationBarButtonColor';
}
export declare function TextButton({ text, children, textProps, variant, ...others }: TextButtonProps): JSX.Element;
