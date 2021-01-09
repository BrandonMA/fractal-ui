import { useTheme } from '@shopify/restyle';
import React, { useMemo } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText } from '../baseComponents/BaseText';
import { BasePressable } from '../baseComponents/BasePressable';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
import { ButtonProps } from './types/ButtonProps';

export function Button(props: ButtonProps): JSX.Element {
    const { variant, children, addShadow, reduceColor, text, ...others } = props;
    const { interactiveItems, shadowProperties, colors } = useTheme<FractalTheme>();
    const [handlePressIn, handlePressOut, style] = useBaseButtonAnimations(props);

    const ripple = useMemo(() => {
        return {
            color: colors.white,
            borderless: true
        };
    }, [colors.white]);

    return (
        <BasePressable
            flexDirection='row'
            backgroundColor={reduceColor ? `${variant}100` : variant}
            borderRadius='buttonRadius'
            android_ripple={ripple}
            justifyContent='center'
            alignItems='center'
            height={interactiveItems.buttonHeight}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={style as any}
            shadowColor={addShadow ? 'shadowColor' : undefined}
            shadowOffset={addShadow ? shadowProperties.offset : undefined}
            shadowRadius={addShadow ? shadowProperties.radius : undefined}
            shadowOpacity={addShadow ? shadowProperties.opacity : undefined}
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
