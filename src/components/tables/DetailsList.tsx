import React, { Fragment, useCallback, forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { ButtonVariant } from '../buttons';
import { Box } from '../containers';
import { LayerProps } from '../containers/Layer/types';
import { Separator } from '../Separator';
import { Text } from '../text';
import { DetailsRow } from './DetailsRow';
import { getListItemAccessibilityProps } from './accessibility/getListItemAccessibilityProps';

export interface DetailsListProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleTextVariant?: 'title' | 'subtitle';
    titleColorVariant?: ButtonVariant | 'text';
}

const DetailsList = forwardRef(
    ({ title, details, titleTextVariant = 'title', titleColorVariant = 'text', ...others }: DetailsListProps, ref: any): JSX.Element => {
        const { colors, spacings } = useTheme();
        const colorName = titleColorVariant !== 'text' ? `${titleColorVariant}InteractiveColor` : titleColorVariant;
        const color = colors[colorName];

        const renderItem = useCallback(
            (item: [string, string], index: number) => {
                const isLastItem = index === details.length - 1;
                return (
                    <Fragment key={item[0]}>
                        <DetailsRow
                            title={item[0]}
                            details={item[1]}
                            marginBottom={isLastItem ? undefined : spacings.s}
                            {...getListItemAccessibilityProps()}
                        />
                        {isLastItem ? null : <Separator marginBottom={spacings.s} />}
                    </Fragment>
                );
            },
            [details.length, spacings.s]
        );

        return (
            <Box ref={ref} {...others}>
                <Text variant={titleTextVariant} color={color} marginBottom={spacings.m}>
                    {title}
                </Text>
                {details.map(renderItem)}
            </Box>
        );
    }
);

DetailsList.displayName = 'DetailsList';

export { DetailsList };
