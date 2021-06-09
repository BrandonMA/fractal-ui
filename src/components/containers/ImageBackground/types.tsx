import { ResizeModeProps } from '../../Image/types/types';
import { LayerProps } from '../Layer/types';

export interface ImageBackgroundProps extends LayerProps, Omit<ResizeModeProps, 'backgroundSize'> {}
