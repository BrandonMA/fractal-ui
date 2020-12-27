import React from 'react';
import { RequiredKeys } from 'utility-types';
import { useThemeColor } from '../../hooks';
import { InteractiveColors } from '../../types/FractalTheme';
import { InternalButton } from './InternalButton/InternalButton';
import { InternalButtonProps } from './InternalButton/types/InternalButtonProps';

interface BaseButtonProps extends Omit<InternalButtonProps, 'textColor' | 'backgroundColor' | 'shadow'> {
    colorStyle: RequiredKeys<InteractiveColors>;
    useSoftBackground?: boolean;
}

export function BaseButton(props: BaseButtonProps): JSX.Element {
    const { useSoftBackground, colorStyle, ...others } = props;
    const interactiveColor = useThemeColor(colorStyle);
    const textColor = useThemeColor('textColor');

    return (
        <InternalButton
            {...others}
            textColor={useSoftBackground ? interactiveColor.base : textColor.base700}
            backgroundColor={useSoftBackground ? interactiveColor.base100 : interactiveColor.base}
            shadow={interactiveColor.shadow}
        />
    );
}
