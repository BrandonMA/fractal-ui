import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface PopoverProps extends LayerProps {
    active: boolean;
    popoverChildren: (mainViewLayout: LayoutRectangle) => ReactNode;
    popoverContainerProps?: Omit<LayerProps, 'children'>;
}
