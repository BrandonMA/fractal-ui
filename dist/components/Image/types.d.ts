import { LayerProps } from '../containers/Layer/types';
declare type ImageRequireSource = number;
declare type ImageSourcePropType = ImageRequireSource | string;
export interface ResizeModeProps {
    source: ImageSourcePropType;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    backgroundSize?: string;
}
export interface ImageProps extends Omit<LayerProps, 'children'>, Omit<ResizeModeProps, 'backgroundSize'> {
    label?: string;
}
export {};
