import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { ActivityIndicator } from '../ActivityIndicator';
import { BaseButton } from '../buttons/BaseButton';
import { BaseButtonProps } from '../buttons/BaseButton/types';

export type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};

export const BaseMediaButton = forwardRef(
    ({ loading, children, activityIndicatorColor = 'white', ...others }: BaseMediaButtonProps, ref: any): JSX.Element => {
        const { sizes, borderRadius, shadows } = useTheme();

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                width={'100%'}
                borderRadius={borderRadius.m}
                boxShadow={shadows.mainShadow}
                justifyContent='center'
                alignItems='center'
                {...others}
            >
                {!loading ? children : <ActivityIndicator height={24} width={24} color={activityIndicatorColor} />}
            </BaseButton>
        );
    }
);
