import React, { useEffect, useState, forwardRef, useRef } from 'react';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
import { PopoverProps } from './types';
import { getPlacementOffsetStyle } from './utils/getPlacementOffsetStyle';

const Popover = forwardRef(
    ({ active, placement = 'bottom', popoverChildren, popoverContainerProps, ...others }: PopoverProps, ref: any): JSX.Element => {
        const mainViewLayout = { x: 0, y: 0, height: 0, width: 0 };
        const [layerVariant, setLayerVariant] = useState('initial');
        const anchorElementRef = useRef<HTMLDivElement>();

        const placementOffsetStyle = getPlacementOffsetStyle(anchorElementRef, placement);

        useEffect((): void => {
            if (active) {
                setLayerVariant('visible');
            } else {
                setLayerVariant('initial');
            }
        }, [active]);

        return (
            <Layer ref={ref} position='relative' display='inline-block'>
                <Layer ref={anchorElementRef} display={'table'} {...others} />
                <Layer
                    initial={'initial'}
                    animate={layerVariant}
                    variants={styleVariants}
                    position={'absolute'}
                    minWidth={200}
                    zIndex={2000}
                    style={placementOffsetStyle}
                    {...popoverContainerProps}
                >
                    {popoverChildren(mainViewLayout)}
                </Layer>
            </Layer>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
