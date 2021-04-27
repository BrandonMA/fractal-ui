import React, { Children, forwardRef, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { GridRow } from './GridRow';
import { GridProps } from './types';
import { getGridAccessibilityProps } from './accessibility/getGridAccessibilityProps';

export const Grid = forwardRef(
    ({ children, ...others }: GridProps, ref: any): JSX.Element => {
        const isRow = useCallback((): boolean => {
            let row = false;
            Children.forEach(children, (child) => {
                if (child && child.type == GridRow) row = true;
            });
            return row;
        }, [children]);

        return (
            <Layer ref={ref} flex={1} flexDirection={isRow() ? 'column' : 'row'} {...others} {...getGridAccessibilityProps()}>
                {children}
            </Layer>
        );
    }
);
