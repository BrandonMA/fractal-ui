import React from 'react';
import { BaseButtonProps } from '../buttons/BaseButton/types';
export declare type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};
declare const BaseMediaButton: React.ForwardRefExoticComponent<Partial<Omit<BaseButtonProps, "variant">> & {
    loading?: boolean | undefined;
    activityIndicatorColor?: string | undefined;
} & React.RefAttributes<unknown>>;
export { BaseMediaButton };
