import React from 'react';
import { useTheme } from '../core/context/hooks/useTheme';
import { ButtonVariant } from './buttons/ButtonVariant';
import { Layer } from './containers';
import { Text } from './text';

interface BadgeProps {
    children?: string;
    variant: ButtonVariant;
}

export function Badge({ children, variant }: BadgeProps): JSX.Element {
    const { colors, spacings } = useTheme();
    const colorName100 = `${variant}InteractiveColor100`;
    const colorName800 = `${variant}InteractiveColor800`;
    const color = colors[colorName800];
    const backgroundColor = colors[colorName100];

    return (
        <Layer backgroundColor={backgroundColor} alignSelf='flex-start' padding={spacings.xs / 2} borderRadius={spacings.xs / 2}>
            <Text variant={'normal'} color={color} fontWeight={'bold'}>
                {children}
            </Text>
        </Layer>
    );
}