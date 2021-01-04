/// <reference types="react" />
import { ColorProps } from '@shopify/restyle';
import { TextInputProps } from 'react-native';
import { FractalTheme } from '../../themes/FractalTheme';
import { BoxProps } from './BaseBox';
export interface BaseTextFieldProps extends Partial<Omit<BoxProps, 'children'>>, ColorProps<FractalTheme>, TextInputProps {
}
export declare function BaseTextField(props: BaseTextFieldProps): JSX.Element;
