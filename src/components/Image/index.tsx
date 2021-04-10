import React from 'react';
import { ImageProps } from './types';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';
import { ResizableImage } from './ResizableImage';
import { Layer } from '../containers/Layer';

export function Image({ label, source, resizeMode, width, height, ...others }: ImageProps): JSX.Element {
    const getBackgroundSize = (): string | undefined => {
        if ((resizeMode == 'center' || resizeMode == 'repeat') && width != null && height != null) {
            if (typeof width == 'string') {
                return `${width} ${height}`;
            }
            return width < height ? `${width}px` : `${height}px`;
        }
        return undefined;
    };

    return (
        <Layer
            flexBasis={'auto'}
            overflow={'hidden'}
            zIndex={0}
            display={'flex'}
            width={width}
            height={height}
            {...others}
            {...getImageAccessibilityProps(label)}
        >
            <ResizableImage source={source} resizeMode={resizeMode} backgroundSize={getBackgroundSize()} />
        </Layer>
    );
}
