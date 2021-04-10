import { LayerProps } from '../containers/Layer/types';

type ImageRequireSource = number;

type ImageSourcePropType = ImageRequireSource | string;

export interface ResizeModeProps {
    source: ImageSourcePropType;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    backgroundSize?: string;
}

export interface ImageProps extends Omit<LayerProps, 'children'>, Omit<ResizeModeProps, 'backgroundSize'> {
    label?: string;
}
