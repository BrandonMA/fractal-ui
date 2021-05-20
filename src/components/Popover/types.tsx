import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';

export interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

export type PlacementType = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps extends LayerProps {
    active: boolean;
    placement?: PlacementType;
    popoverChildren: (mainViewLayout: LayoutRectangle) => ReactNode;
    popoverContainerProps?: Omit<LayerProps, 'children'>;
}
