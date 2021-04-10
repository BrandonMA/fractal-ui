import React from 'react';
import { ImageBackgroundProps } from './types';
import { Layer } from '../Layer';
import { Image } from '../../Image';
import { getImgAccessibilityProps } from './accessibility/getImgAccessibilityProps';

export function ImageBackground({ children, resizeMode, source, width, height, ...others }: ImageBackgroundProps): JSX.Element {
    return (
        <Layer position={'relative'} overflow={'hidden'} width={width} height={height} {...others} {...getImgAccessibilityProps()}>
            <Image width={width} height={height} resizeMode={resizeMode} source={source} position={'absolute'} />
            <Layer zIndex={1}>{children}</Layer>
        </Layer>
    );
}
