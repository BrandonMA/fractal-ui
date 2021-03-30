import { ReactNode } from 'react';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';

type ImageRequireSource = number;

type ImageSourcePropType = ImageRequireSource | string;

export interface ImageBackgroundProps extends FractalSharedProps {
    children?: ReactNode | Array<ReactNode>;
    source: ImageSourcePropType;
}
