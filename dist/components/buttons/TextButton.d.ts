/// <reference types="react" />
import { BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { BasicColors } from '../types/BasicColors';
import { TitleButtonVariant } from './types/TitleButtonVariant';
export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text: string;
    variant: BasicColors | TitleButtonVariant;
}
export declare function TextButton(props: TextButtonProps): JSX.Element;
