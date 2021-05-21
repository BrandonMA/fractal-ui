import React, { useCallback, useEffect, useMemo, useState, forwardRef } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
import { LayoutRectangle, PopoverProps } from './types';
import { getNativePlacementOffsetStyle } from './utils/getNativePlacementOffsetStyle';

const Popover = forwardRef(
    ({ active, placement = 'bottom', popoverChildren, popoverContainerProps, ...others }: PopoverProps, ref: any): JSX.Element => {
        const [anchorViewLayout, setAnchorViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
        const [childViewLayout, setChildViewLayout] = useState<LayoutRectangle>({ x: 0, y: 0, height: 0, width: 0 });
        const [layerVariant, setLayerVariant] = useState('initial');

        const styles = useMemo(() => {
            return getNativePlacementOffsetStyle(anchorViewLayout, childViewLayout, placement);
        }, [anchorViewLayout, childViewLayout, placement]);

        const onAnchorLayout = useCallback(({ nativeEvent: { layout } }: LayoutChangeEvent) => {
            setAnchorViewLayout(layout);
        }, []);

        const onChildLayout = useCallback(({ nativeEvent: { layout } }: LayoutChangeEvent) => {
            setChildViewLayout(layout);
        }, []);

        useEffect((): void => {
            if (active) {
                setLayerVariant('visible');
            } else {
                setLayerVariant('initial');
            }
        }, [active]);

        return (
            <Layer ref={ref}>
                <Layer {...others} onLayout={onAnchorLayout} />
                <Layer
                    onLayout={onChildLayout}
                    initial={'initial'}
                    animate={layerVariant}
                    variants={styleVariants}
                    position={'absolute'}
                    minWidth={200}
                    zIndex={2000}
                    style={styles}
                    {...popoverContainerProps}
                >
                    {popoverChildren(anchorViewLayout)}
                </Layer>
            </Layer>
        );
    }
);

Popover.displayName = 'Popover';

export { Popover };
