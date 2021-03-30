import React, { Fragment, memo, useCallback } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { ButtonVariant } from '../buttons';
import { Box } from '../containers';
import { LayerProps } from '../containers/Layer/types';
import { Separator } from '../Separator';
import { Text } from '../text';
import { DetailsRow } from './DetailsRow';

export interface DetailsListProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleTextVariant?: 'title' | 'subtitle';
    titleColorVariant?: ButtonVariant | 'text';
}

export const DetailsList = memo(
    ({ title, details, titleTextVariant = 'title', titleColorVariant = 'text', ...others }: DetailsListProps): JSX.Element => {
        const { colors, spacings } = useTheme();
        const colorName = titleColorVariant !== 'text' ? `${titleColorVariant}InteractiveColor` : titleColorVariant;
        const color = colors[colorName];

        const renderItem = useCallback(
            (item: [string, string], index: number) => {
                const isLastItem = index === details.length - 1;
                return (
                    <Fragment key={item[0]}>
                        <DetailsRow title={item[0]} details={item[1]} marginBottom={isLastItem ? undefined : spacings.s} />
                        {isLastItem ? null : <Separator marginBottom={spacings.s} />}
                    </Fragment>
                );
            },
            [details.length, spacings.s]
        );

        return (
            <Box {...others}>
                <Text variant={titleTextVariant} color={color} marginBottom={spacings.m}>
                    {title}
                </Text>
                {details.map(renderItem)}
            </Box>
        );
    }
);