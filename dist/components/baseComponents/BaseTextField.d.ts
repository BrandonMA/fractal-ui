/// <reference types="react" />
import { ColorProps } from '@shopify/restyle';
import { TextInputProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { FractalTheme } from '../../themes/FractalTheme';
export interface BaseTextFieldProps extends Omit<BaseBoxProps, 'children'>, ColorProps<FractalTheme>, TextInputProps {
}
export declare function BaseTextField(props: BaseTextFieldProps): JSX.Element;
