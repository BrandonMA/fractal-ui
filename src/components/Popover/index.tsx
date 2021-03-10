import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
import { PopoverProps } from './types';

const PopoverWrapper = styled(Layer)`
    position: relative;
    display: inline-block;
`;

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
        <PopoverWrapper>
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
        </PopoverWrapper>
    );
}
