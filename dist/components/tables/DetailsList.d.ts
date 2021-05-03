import React from 'react';
import { ButtonVariant } from '../buttons';
import { LayerProps } from '../containers/Layer/types';
export interface DetailsListProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleTextVariant?: 'title' | 'subtitle';
    titleColorVariant?: ButtonVariant | 'text';
}
declare const DetailsList: React.ForwardRefExoticComponent<DetailsListProps & React.RefAttributes<unknown>>;
export { DetailsList };
