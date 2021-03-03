import React from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

export function BaseButton({ pressedBackgroundColor, whileHover, whileTap, ...others }: BaseButtonProps): JSX.Element {
    const hoverStyles = {
        backgroundColor: pressedBackgroundColor,
        ...whileHover
    };

    const tapStyles = {
        scale: 0.9,
        backgroundColor: pressedBackgroundColor,
        ...whileTap
    };

    return <Pressable {...others} whileHover={hoverStyles} whileTap={tapStyles} />;
}
