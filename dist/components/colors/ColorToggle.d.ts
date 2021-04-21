import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface ColorToggleProps extends LayerProps {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}
export declare const ColorToggle: React.ForwardRefExoticComponent<ColorToggleProps & React.RefAttributes<unknown>>;
