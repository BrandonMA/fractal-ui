import React from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

export function BaseButton({ backgroundColor, whileTap, pressedBackgroundColor, ...others }: BaseButtonProps): JSX.Element {
    const tapStyles = {
        scale: 0.9,
        backgroundColor: pressedBackgroundColor,
        ...whileTap
    };

    return <Pressable whileTap={tapStyles} backgroundColor={backgroundColor} {...others} />;
}
