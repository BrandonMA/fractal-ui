import React, { forwardRef } from 'react';
import { Layer } from '../containers/Layer';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { LayerProps } from '../containers/Layer/types';
import { Separator } from '../Separator';
import { useTheme } from '../../context';

export interface DetailsRowProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: string;
    addSeparator?: boolean;
}

const DetailsRow = forwardRef(
    ({ title, details, addSeparator = false, ...others }: DetailsRowProps, ref: any): JSX.Element => {
        const { spacings } = useTheme();
        return (
            <>
                <HorizontalLayer ref={ref} alignItems='center' marginBottom={addSeparator ? spacings.s : undefined} {...others}>
                    <Layer flexGrow={1}>
                        <Text variant='small'>{title}</Text>
                    </Layer>
                    <Text variant='label'>{details}</Text>
                </HorizontalLayer>
                {addSeparator ? <Separator marginBottom={spacings.s} /> : null}
            </>
        );
    }
);

DetailsRow.displayName = 'DetailsRow';

export { DetailsRow };
