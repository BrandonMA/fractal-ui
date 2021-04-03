import React, { useCallback } from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { LayerProps } from '../../containers/Layer/types';
import { ButtonVariant } from '../ButtonVariant';
import { ItemButton } from './ItemButton';
import { getButtonGroupAccessibilityProps } from '../accessibility/getButtonGroupAccessibilityProps';

interface ButtonGroupProps extends LayerProps {
    variant?: ButtonVariant;
    buttons: Array<string>;
    selectedIndex: number;
    onPress?: (index: number) => void;
}

export function ButtonGroup({ variant, buttons, selectedIndex, onPress, ...layerProps }: ButtonGroupProps): JSX.Element {
    const { borderRadius, colors } = useTheme();

    const handleOnPress = useCallback(
        (idx: number): void => {
            onPress?.(idx);
        },
        [onPress]
    );

    const renderItemButton = (buttonText: string, index: number): JSX.Element => {
        const isSelected = index === selectedIndex;
        return (
            <ItemButton
                key={buttonText}
                width={`${100 / buttons.length}%`}
                isSelected={isSelected}
                variant={variant}
                onPress={() => handleOnPress(index)}
                text={buttonText}
            />
        );
    };

    return (
        <HorizontalLayer backgroundColor={colors.background} width={'100%'} borderRadius={borderRadius.m} padding={2} {...layerProps} {...getButtonGroupAccessibilityProps()}>
            {buttons.map(renderItemButton)}
        </HorizontalLayer>
    );
}
