import React from 'react';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { GridListProps } from './types';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';

const StyledGrid = styled(Layer)`
    flex-wrap: wrap;
    flex-direction: row;
`;

export function GridList<T>(props: GridListProps<T>): JSX.Element {
    const { numColumns, renderItem, data } = props;

    const renderWrapper = (item: T, index: number): JSX.Element => {
        return (
            <Layer key={`${index}`} width={`${100 / numColumns}%`}>
                {renderItem(item, index)}
            </Layer>
        );
    };

    return <StyledGrid {...props} {...getGridListAccessibilityProps()} >{data.map(renderWrapper)}</StyledGrid>;
}
