import { TextFieldProps } from './BaseTextField/types';
import { LayerProps } from '../containers/Layer/types';
export interface IconTextFieldProps extends Partial<Omit<LayerProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    textFieldProps?: TextFieldProps;
}
export declare function IconTextField({ leftImage, rightImage, value, placeholder, onChangeText, textFieldProps, ...others }: IconTextFieldProps): JSX.Element;
