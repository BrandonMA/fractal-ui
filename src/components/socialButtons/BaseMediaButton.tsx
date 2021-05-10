import React, { forwardRef, useState } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { ActivityIndicator } from '../ActivityIndicator';
import { BaseButton } from '../buttons/BaseButton';
import { BaseButtonProps } from '../buttons/BaseButton/types';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';

export type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};

const BaseMediaButton = forwardRef(
    ({ loading, children, activityIndicatorColor = 'white', onPress, ...others }: BaseMediaButtonProps, ref: any): JSX.Element => {
        const { sizes, borderRadius, shadows } = useTheme();

        const [pressed, setPressed] = useState(false);

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                width={'100%'}
                borderRadius={borderRadius.m}
                boxShadow={shadows.mainShadow}
                justifyContent='center'
                alignItems='center'
                onPress={handleButtonPress}
                {...getButtonAccessibilityProps(pressed)}
                {...others}
            >
                {!loading ? children : <ActivityIndicator height={24} width={24} color={activityIndicatorColor} />}
            </BaseButton>
        );
    }
);

BaseMediaButton.displayName = 'BaseMediaButton';

export { BaseMediaButton };
