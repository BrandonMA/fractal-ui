import React, { useCallback, useState } from 'react';
import { BoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers';
import { ColorToggle } from './ColorToggle';

export interface ColorPickerProps extends Partial<Omit<BoxProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}

export function ColorPicker(props: ColorPickerProps): JSX.Element {
    const { colors, onColorChange, ...others } = props;
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

    return (
        <HorizontalView justifyContent={'space-around'} flexWrap={'wrap'} {...others}>
            {colors.map((color) => (
                <ColorToggle
                    backgroundColor={color}
                    key={color}
                    onActiveChange={handleColorChange}
                    active={activeColor === color}
                    margin={'xs'}
                />
            ))}
        </HorizontalView>
    );
}
