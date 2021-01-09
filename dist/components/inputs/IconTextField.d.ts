/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField';
export interface IconTextFieldProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    textFieldProps?: BaseTextFieldProps;
}
export declare function IconTextField({ leftImage, rightImage, value, placeholder, onChangeText, textFieldProps, ...others }: IconTextFieldProps): JSX.Element;
