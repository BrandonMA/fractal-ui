import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseText } from './BaseText';
import { TextProps } from './BaseText/types';

export function Text({ variant, ...others }: TextProps): JSX.Element {
    const { textVariants, colors } = useTheme();
    const { fontSize, fontWeight, color, fontFamily } = textVariants[variant];
    const finalColor = colors[color];

    return (
        <BaseText selectable={false} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={finalColor} {...others} />
    );
}
