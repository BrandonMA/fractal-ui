import React, { forwardRef } from 'react';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { LayerProps } from '../../containers/Layer/types';
import { Separator } from '../../Separator';
import { useTheme } from '../../../context';

export interface BaseRowProps extends LayerProps {
    addSeparator?: boolean;
}

const BaseRow = forwardRef(({ addSeparator = false, ...others }: BaseRowProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return (
        <>
            <HorizontalLayer ref={ref} alignItems='center' marginBottom={addSeparator ? spacings.s : undefined} {...others} />
            {addSeparator ? <Separator marginBottom={spacings.s} /> : null}
        </>
    );
});

BaseRow.displayName = 'BaseRow';

export { BaseRow };
