import React, { forwardRef, ReactNode } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { ButtonVariant } from '../buttons';
import { Box } from '../containers';
import { LayerProps } from '../containers/Layer/types';
import { Text } from '../text';

export interface DetailsListProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    children?: ReactNode;
    titleTextVariant?: 'title' | 'subtitle';
    titleColorVariant?: ButtonVariant | 'text';
}

const TableContainer = forwardRef(
    ({ title, children, titleTextVariant = 'title', titleColorVariant = 'text', ...others }: DetailsListProps, ref: any): JSX.Element => {
        const { colors, spacings } = useTheme();
        const colorName = titleColorVariant !== 'text' ? `${titleColorVariant}InteractiveColor` : titleColorVariant;
        const color = colors[colorName];

        return (
            <Box ref={ref} {...others}>
                <Text variant={titleTextVariant} color={color} marginBottom={spacings.m}>
                    {title}
                </Text>
                {children}
            </Box>
        );
    }
);

TableContainer.displayName = 'TableContainer';

export { TableContainer };
