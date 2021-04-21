import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<unknown>>;
