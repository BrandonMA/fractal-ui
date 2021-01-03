import { useTheme } from '@shopify/restyle';
import React, { useMemo } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText } from '../baseComponents/BaseText';
import { BasePressable } from '../baseComponents/BasePressable';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
import { ButtonProps } from './types/ButtonProps';

export function Button(props: ButtonProps): JSX.Element {
    const { variant, children, addShadow, reduceColor, text, ...others } = props;
    const theme = useTheme<FractalTheme>();
    const [handlePressIn, handlePressOut, style] = useBaseButtonAnimations(props);

    const ripple = useMemo(() => {
        return {
            color: theme.colors.white,
            borderless: true
        };
    }, [theme]);

    return (
        <BasePressable
            flexDirection='row'
            backgroundColor={reduceColor ? `${variant}100` : variant}
            borderRadius='buttonRadius'
            android_ripple={ripple}
            justifyContent='center'
            alignItems='center'
            height={theme.interactiveItems.buttonHeight}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={style as any}
            shadowColor={addShadow ? 'shadowColor' : undefined}
            shadowOffset={addShadow ? theme.shadowProperties.offset : undefined}
            shadowRadius={addShadow ? theme.shadowProperties.radius : undefined}
            shadowOpacity={addShadow ? theme.shadowProperties.opacity : undefined}
            {...others}
        >
            {children}
            {text != null ? (
                <BaseText
                    selectable={false}
                    paddingLeft={children != null ? 'xs' : undefined}
                    fontWeight='700'
                    color={reduceColor ? variant : 'white'}
                >
                    {text}
                </BaseText>
            ) : null}
        </BasePressable>
    );
}
