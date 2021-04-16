import React, { forwardRef } from 'react';
import { Layer } from '../containers/Layer';
import { GridListProps } from './types';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';

export const GridList = forwardRef(function List<T>(props: GridListProps<T>, ref: any): JSX.Element {
    const { numColumns, renderItem, data } = props;

    const renderWrapper = (item: T, index: number): JSX.Element => {
        return (
            <Layer key={`${index}`} width={`${100 / numColumns}%`}>
                {renderItem(item, index)}
            </Layer>
        );
    };

    return (
        <Layer ref={ref} flexWrap={'wrap'} flexDirection={'row'} {...props} {...getGridListAccessibilityProps()}>
            {data.map(renderWrapper)}
        </Layer>
    );
});
