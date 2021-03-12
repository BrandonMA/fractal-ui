import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ActivityIndicator } from '../ActivityIndicator';
import { BaseButton } from '../buttons/BaseButton';
import { BaseButtonProps } from '../buttons/BaseButton/types';

export type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};

export function BaseMediaButton({ loading, children, activityIndicatorColor = 'white', ...others }: BaseMediaButtonProps): JSX.Element {
    const { sizes, borderRadius, shadows } = useTheme();

    return (
        <BaseButton
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
