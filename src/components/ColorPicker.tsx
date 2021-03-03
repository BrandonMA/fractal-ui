import React, { useCallback, useState } from 'react';
import { ColorToggle } from './ColorToggle';
import { LayerProps } from './containers/Layer/types';
import { HorizontalLayer } from './containers/HorizontalLayer';
import { useTheme } from '../hooks/useTheme';

export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}

export function ColorPicker({ colors, onColorChange, ...others }: ColorPickerProps): JSX.Element {
    const [activeColor, setActiveColor] = useState(colors[0]);
    const { spacings } = useTheme();

    const handleColorChange = useCallback(
        (active: boolean, color: string) => {
            if (active) {
                setActiveColor(color);
                onColorChange(color);
            }
        },
        [onColorChange]
    );

    const renderItem = (color: string) => (
        <ColorToggle
            backgroundColor={color}
            key={color}
            onActiveChange={handleColorChange}
            active={activeColor === color}
            margin={spacings.xs}
        />
    );

    return (
        <HorizontalLayer justifyContent={'space-around'} flexWrap={'wrap'} {...others}>
            {colors.map(renderItem)}
        </HorizontalLayer>
    );
}
