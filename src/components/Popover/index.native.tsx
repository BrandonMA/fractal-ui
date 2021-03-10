import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
import { LayoutRectangle, PopoverProps } from './types';

export function Popover(props: PopoverProps): JSX.Element {
    const { active, popoverChildren, popoverContainerProps, ...others } = props;
    const [mainViewLayout, setMainViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
    const yValueWithOffset = mainViewLayout.y + mainViewLayout.height;
    const [layerVariant, setLayerVariant] = useState('initial');

    const styles = useMemo(() => {
        return {
            left: mainViewLayout.x,
            top: yValueWithOffset,
            width: mainViewLayout.width,
            zIndex: 2000
        };
    }, [yValueWithOffset, mainViewLayout]);

    const onLayout = useCallback(
        (nativeElement) => {
            setMainViewLayout(nativeElement.nativeEvent.layout);
        },
        [setMainViewLayout]
    );

    useEffect((): void => {
        if (active) {
            setLayerVariant('visible');
        } else {
            setLayerVariant('initial');
        }
    }, [active]);

    return (
        <>
            <Layer {...others} onLayout={onLayout} />
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
        </>
    );
}
