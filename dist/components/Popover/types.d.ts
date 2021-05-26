import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare type PlacementType = 'top' | 'right' | 'bottom' | 'left';
export interface PopoverProps extends LayerProps {
    active: boolean;
    onRequestClose: () => void;
    placement?: PlacementType;
    popoverChildren: () => ReactNode;
    popoverContainerProps?: Omit<LayerProps, 'children'>;
}
