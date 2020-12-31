import { ComponentProps, ReactNode } from 'react';
import { ColorProps, TypographyProps } from '@shopify/restyle';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { Picker } from '@react-native-picker/picker';
import { FractalTheme } from '../../themes/FractalTheme';
export interface BasePickerProps extends Omit<BaseBoxProps, 'children'>, TypographyProps<FractalTheme>, ColorProps<FractalTheme>, ComponentProps<typeof Picker> {
    children: ReactNode;
}
export declare function BasePicker(props: BasePickerProps): JSX.Element;
