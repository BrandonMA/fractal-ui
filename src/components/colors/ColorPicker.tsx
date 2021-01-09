import React, { useCallback, useState } from 'react';
import { BoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers';
import { ColorToggle } from './ColorToggle';

export interface ColorPickerProps extends Partial<Omit<BoxProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}

export function ColorPicker({ colors, onColorChange, ...others }: ColorPickerProps): JSX.Element {
    const [activeColor, setActiveColor] = useState(colors[0]);

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
        <ColorToggle backgroundColor={color} key={color} onActiveChange={handleColorChange} active={activeColor === color} margin={'xs'} />
    );

    return (
        <HorizontalView justifyContent={'space-around'} flexWrap={'wrap'} {...others}>
            {colors.map(renderItem)}
        </HorizontalView>
    );
}
