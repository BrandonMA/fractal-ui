import { LayerProps } from '../containers/Layer/types';
export interface DetailsRowProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: string;
}
export declare function DetailsRow({ title, details, ...others }: DetailsRowProps): JSX.Element;
