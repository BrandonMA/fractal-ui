import React, { forwardRef } from 'react';
import { BaseButtonProps } from './types';
import { Pressable } from '../Pressable';

export const BaseButton = forwardRef(
    ({ pressedBackgroundColor, whileHover, whileTap, ...others }: BaseButtonProps, ref: any): JSX.Element => {
        const hoverStyles = {
            backgroundColor: pressedBackgroundColor,
            ...whileHover
        };

        const tapStyles = {
            scale: 0.95,
            backgroundColor: pressedBackgroundColor,
            ...whileTap
        };

        return <Pressable ref={ref} {...others} whileHover={hoverStyles} whileTap={tapStyles} />;
    }
);
