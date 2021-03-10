import React, { Children } from 'react';
import { Layer } from '../containers/Layer';
import { GridRow } from './GridRow';
import { GridProps } from './types';

export function Grid({ children, ...others }: GridProps): JSX.Element {
    const isRow = (): boolean => {
        let row = false;
        Children.forEach(children, (child) => {
            if (child && child.type == GridRow) row = true;
        });
        return row;
    };

    return (
        <Layer flex={1} flexDirection={isRow() ? 'column' : 'row'} {...others}>
            {children}
        </Layer>
    );
}
