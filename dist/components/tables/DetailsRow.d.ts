import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface DetailsRowProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: string;
}
declare const DetailsRow: React.ForwardRefExoticComponent<DetailsRowProps & React.RefAttributes<unknown>>;
export { DetailsRow };
