import React from 'react';
import { ButtonVariant } from './buttons/ButtonVariant';
interface BadgeProps {
    children?: string;
    variant: ButtonVariant;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<unknown>>;
export {};
