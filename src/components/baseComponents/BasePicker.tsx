import React, { ComponentProps, ReactNode } from 'react';
import { ColorProps, useRestyle, TypographyProps } from '@shopify/restyle';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { restyleFunctions } from './restyleFunctions';
import { Picker } from '@react-native-picker/picker';
import { FractalTheme } from '../../themes/FractalTheme';

export interface BasePickerProps
    extends Omit<BaseBoxProps, 'children'>,
        TypographyProps<FractalTheme>,
        ColorProps<FractalTheme>,
        ComponentProps<typeof Picker> {
    children: ReactNode;
}

export function BasePicker(props: BasePickerProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props) as BasePickerProps;
    return <Picker {...restyleProps} />;
}
