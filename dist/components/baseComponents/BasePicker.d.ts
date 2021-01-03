import { ComponentProps, ReactNode } from 'react';
import { ColorProps, TypographyProps } from '@shopify/restyle';
import { Picker } from '@react-native-picker/picker';
import { FractalTheme } from '../../themes/FractalTheme';
import { BoxProps } from './BaseBox';
export interface BasePickerProps extends Omit<BoxProps, 'children'>, TypographyProps<FractalTheme>, ColorProps<FractalTheme>, ComponentProps<typeof Picker> {
    children: ReactNode;
}
export declare function BasePicker(props: BasePickerProps): JSX.Element;
