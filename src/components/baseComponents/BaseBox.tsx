import { createBox, BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';

export const BaseBox = createBox<FractalTheme>();

export interface BaseBoxProps extends BoxProps<FractalTheme> {
    children: ReactNode;
}
