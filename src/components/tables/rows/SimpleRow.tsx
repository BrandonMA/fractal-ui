import React, { forwardRef } from 'react';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { BaseRow, BaseRowProps } from './BaseRow';

export interface SimpleRowProps extends BaseRowProps {
    title: string;
}

const SimpleRow = forwardRef(({ title, ...others }: SimpleRowProps, ref: any): JSX.Element => {
    return (
        <BaseRow ref={ref} {...others}>
            <Layer flexGrow={1}>
                <Text variant='small'>{title}</Text>
            </Layer>
        </BaseRow>
    );
});

SimpleRow.displayName = 'SimpleRow';

export { SimpleRow };
