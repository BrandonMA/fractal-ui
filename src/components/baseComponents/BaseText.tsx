import { createText } from '@shopify/restyle';
import { ComponentProps } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';

export const BaseText = createText<FractalTheme>();

export type BaseTextProps = Partial<ComponentProps<typeof BaseText>>;
