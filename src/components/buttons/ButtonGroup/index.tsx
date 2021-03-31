import React, { useCallback } from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { LayerProps } from '../../containers/Layer/types';
import { ButtonVariant } from '../ButtonVariant';
import { ItemButton } from './ItemButton';

interface ButtonGroupProps extends LayerProps {
    variant: ButtonVariant;
    buttons: Array<string>;
    selectedIndex: number;
    onPress?: (index: number) => void;
}

export function ButtonGroup({ variant, buttons, selectedIndex, onPress, ...layerProps }: ButtonGroupProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    const colorName = `${variant}InteractiveColor`;
    const color = colors[colorName];

    const pressedColorName = `${variant}InteractiveColor600`;
    const pressedColor = colors[pressedColorName];
    const styleVariants = {
        active: {
            backgroundColor: color
        },
        inactive: {
            backgroundColor: colors.foreground
        }
    };

    const handleOnPress = useCallback(
        (idx: number): void => {
            onPress?.(idx);
        },
        [onPress]
    );

    const renderItemButton = (buttonText: string, index: number): JSX.Element => {
        const lastIndex = buttons.length - 1;
        const isSelected = index === selectedIndex;

        return (
            <ItemButton
                key={buttonText}
                width={`${100 / buttons.length}%`}
                borderTopLeftRadius={index === 0 ? borderRadius.lg : undefined}
                borderBottomLeftRadius={index === 0 ? borderRadius.lg : undefined}
                borderTopRightRadius={index === lastIndex ? borderRadius.lg : undefined}
                borderBottomRightRadius={index === lastIndex ? borderRadius.lg : undefined}
                pressedBackgroundColor={pressedColor}
                text={buttonText}
                textColor={isSelected ? colors.white : colors.text}
                onPress={() => handleOnPress(index)}
                initial={'active'}
                animate={isSelected ? 'active' : 'inactive'}
                variants={styleVariants}
            />
        );
    };

    return (
        <HorizontalLayer width={'100%'} borderRadius={borderRadius.lg} {...layerProps}>
            {buttons.map(renderItemButton)}
        </HorizontalLayer>
    );
}
