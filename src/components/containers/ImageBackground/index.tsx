import React from 'react';
import { ImageBackgroundProps } from './types';
import { Layer } from '../Layer';
import { Image } from '../../Image';

export function ImageBackground({ children, resizeMode, source, width, height, ...others }: ImageBackgroundProps): JSX.Element {
    return (
        <Layer position={'relative'} overflow={'hidden'} width={width} height={height} {...others}>
            <Image width={width} height={height} resizeMode={resizeMode} source={source} position={'absolute'} label={'Background'} />
            <Layer zIndex={1}>{children}</Layer>
        </Layer>
    );
}
