import React from 'react';
import { ColorPicker, brinkPink, FractalTheme, lime, pink, purple } from '../src';
import { useTheme } from '@shopify/restyle';

export function FinalColorPicker(): JSX.Element {
    const { colors } = useTheme<FractalTheme>();

    return (
        <>
            <ColorPicker
                onColorChange={(color) => console.log(color)}
                marginBottom={'m'}
                colors={[
                    colors.mainInteractiveColor,
                    colors.alternativeInteractiveColor,
                    colors.successInteractiveColor,
                    colors.dangerInteractiveColor,
                    colors.warningInteractiveColor
                ]}
            />
            <ColorPicker
                onColorChange={(color) => console.log(color)}
                colors={[
                    colors.mainInteractiveColor,
                    colors.alternativeInteractiveColor,
                    colors.successInteractiveColor,
                    colors.dangerInteractiveColor,
                    colors.warningInteractiveColor,
                    purple.base,
                    brinkPink.base,
                    lime.base,
                    pink.base
                ]}
            />
        </>
    );
}
