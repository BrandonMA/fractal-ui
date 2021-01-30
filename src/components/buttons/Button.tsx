import { useTheme } from '@shopify/restyle';
import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText } from '../baseComponents/BaseText';
import { BasePressable } from '../baseComponents/BasePressable';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
import { ButtonProps } from './types/ButtonProps';
import { ActivityIndicator } from '../ActivityIndicator';

export function Button(props: ButtonProps): JSX.Element {
    const {
        variant = 'mainInteractiveColor',
        children,
        addShadow,
        loading,
        reduceColor,
        text,
        activityIndicatorColor = 'white',
        ...others
    } = props;
    const { interactiveItems, shadowProperties } = useTheme<FractalTheme>();
    const [handlePressIn, handlePressOut, style] = useBaseButtonAnimations(props);
    const loadingColor = `${variant}300`;
    const normalBackgroundColor = reduceColor ? `${variant}100` : variant;
    const finalBackgroundColor = loading ? loadingColor : normalBackgroundColor;

    return (
        <BasePressable
            flexDirection='row'
            backgroundColor={finalBackgroundColor}
            borderRadius='buttonRadius'
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
            pointerEvents={loading ? 'none' : 'auto'}
            {...others}
        >
            {loading ? <ActivityIndicator color={activityIndicatorColor} /> : children}
            {text && !loading ? (
                <BaseText
                    selectable={false}
                    paddingLeft={children != null ? 'xs' : undefined}
                    variant='button'
                    color={reduceColor ? variant : 'white'}
                >
                    {text}
                </BaseText>
            ) : null}
        </BasePressable>
    );
}
