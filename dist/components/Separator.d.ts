/// <reference types="react" />
import { LayerProps } from './containers/Layer/types';
export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}
export declare function Separator({ isAtBackgroundLevel, ...others }: SeparatorProps): JSX.Element;
