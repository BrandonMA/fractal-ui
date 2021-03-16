import React from 'react';
import { ButtonVariant } from '../buttons';
import { LayerProps } from '../containers/Layer/types';
export interface DetailsListProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleTextVariant?: 'title' | 'subtitle';
    titleColorVariant?: ButtonVariant | 'text';
}
export declare const DetailsList: React.MemoExoticComponent<({ title, details, titleTextVariant, titleColorVariant, ...others }: DetailsListProps) => JSX.Element>;
