import React from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { ButtonVariant } from '../ButtonVariant';
import { Pressable } from '../Pressable';
import { Text } from '../../text';

interface ItemButtonProps {
    width: string | number;
    isSelected: boolean;
    onPress: () => void;
    variant?: ButtonVariant;
    text: string;
}

export function ItemButton({ width, isSelected, onPress, variant, text }: ItemButtonProps): JSX.Element {
    const { borderRadius, colors, shadows, sizes } = useTheme();
    const colorName = variant ? `${variant}InteractiveColor` : 'foreground';
    const color = colors[colorName];

    return (
        <Pressable width={width} position={'relative'} height={sizes.interactiveItemHeight} padding={0} onPress={onPress}>
            <Layer
                position={'absolute'}
                borderRadius={borderRadius.m}
                boxShadow={isSelected ? shadows.mainShadow : undefined}
                height={'100%'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                initial={'inactive'}
                animate={isSelected ? 'active' : 'inactive'}
                variants={{
                    active: {
                        backgroundColor: color
                    },
                    inactive: {
                        backgroundColor: colors.background
                    }
                }}
            >
                <Text variant='normal'>{text}</Text>
            </Layer>
        </Pressable>
    );
}
