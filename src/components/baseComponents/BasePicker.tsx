import React, { ComponentProps, ReactNode } from 'react';
import { ColorProps, useRestyle, TypographyProps } from '@shopify/restyle';
import { restyleFunctions } from './restyleFunctions';
import { Picker } from '@react-native-picker/picker';
import { FractalTheme } from '../../themes/FractalTheme';
import { BoxProps } from './BaseBox';

export interface BasePickerProps
    extends Partial<Omit<BoxProps, 'children'>>,
        TypographyProps<FractalTheme>,
        ColorProps<FractalTheme>,
        ComponentProps<typeof Picker> {
    children: ReactNode;
}

export function BasePicker(props: BasePickerProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props);
    return <Picker {...restyleProps} />;
}
