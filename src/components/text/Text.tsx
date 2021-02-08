import React, { memo } from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { BaseText } from './BaseText';
import { TextProps } from './BaseText/types';

export const Text = memo(
    ({ variant, ...others }: TextProps): JSX.Element => {
        const { textStyles } = useFractalTheme();
        const { fontSize, fontWeight, color, fontFamily } = textStyles[variant];

        return <BaseText fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={color} {...others} />;
    }
);
