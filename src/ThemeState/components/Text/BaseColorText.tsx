import React from 'react';
import { RequiredKeys } from 'utility-types';
import { useThemeColor } from '../../hooks/useThemeColor';
import { InteractiveColors } from '../../types/FractalTheme';
import { InternalText, InternalTextProps } from './InternalText';

export interface BaseColorTextProps extends Omit<InternalTextProps, 'color'> {
    colorStyle: RequiredKeys<InteractiveColors>;
}

export function BaseColorText(props: BaseColorTextProps): JSX.Element {
    const { colorStyle, ...others } = props;
    const interactiveColor = useThemeColor(colorStyle);
    return <InternalText selectable={false} {...others} color={interactiveColor.base} />;
}
