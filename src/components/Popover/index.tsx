import React, { useEffect, useState } from 'react';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
import { PopoverProps } from './types';

const styles = {
    width: '100%',
    zIndex: 2000
};

export function Popover(props: PopoverProps): JSX.Element {
    const { active, popoverChildren, popoverContainerProps, ...others } = props;
    const mainViewLayout = { x: 0, y: 0, height: 0, width: 0 };
    const [layerVariant, setLayerVariant] = useState('initial');

    useEffect((): void => {
        if (active) {
            setLayerVariant('visible');
        } else {
            setLayerVariant('initial');
        }
    }, [active]);

    return (
        <Layer position='relative' display='inline-block'>
            <Layer {...others} />
            <Layer
                initial={'initial'}
                animate={layerVariant}
                variants={styleVariants}
                position={'absolute'}
                style={styles}
                {...popoverContainerProps}
            >
                {popoverChildren(mainViewLayout)}
            </Layer>
        </Layer>
    );
}
