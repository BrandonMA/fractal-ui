import React from 'react';
import { Layer } from '../containers/Layer';
import styled from 'styled-components';
import { LayerProps } from '../containers/Layer/types';

export const BaseTableCell = styled(Layer)`
    flex-direction: row;
    flex-wrap: nowrap;
`;

export function TableCell({ flexGrow = 1, paddingTop = 8, paddingBottom = 8, ...others }: LayerProps): JSX.Element {
    return (
        <BaseTableCell
            flexGrow={flexGrow}
            flexBasis={0}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            overflow={'hidden'}
            {...others}
        />
    );
}

// word-break: break-word;
// text-overflow: ellipsis;
// white-space: nowrap;
