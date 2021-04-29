import React, { forwardRef, useCallback } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { RadioButton } from './RadioButton';
import { RadioGroupProps, RadioItem } from './types';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';

export const RadioGroup = forwardRef(
    ({ value, defaultValue, radioButtons, onValueChange, ...others }: RadioGroupProps, ref: any): JSX.Element => {
        const { spacings } = useTheme();
        const [activeValue, setActiveValue] = useControllableState({ value, defaultValue: defaultValue ?? '', onChange: onValueChange });

        const handleChange = useCallback(
            (value: string): void => {
                setActiveValue(value);
            },
            [setActiveValue]
        );

        const renderRadioButton = useCallback(
            (item: RadioItem, index: number): JSX.Element => {
                const isLastItem = index === radioButtons.length - 1;
                const { flexDirection } = others;

                return (
                    <RadioButton
                        marginBottom={flexDirection != 'row' && isLastItem ? 0 : spacings.s}
                        marginRight={flexDirection == 'row' && isLastItem ? 0 : spacings.s}
                        key={item.value}
                        active={item.value == activeValue}
                        label={item.label}
                        value={item.value}
                        onPress={() => handleChange(item.value)}
                    />
                );
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [activeValue, handleChange]
        );

        return (
            <Layer ref={ref} {...others} {...getRadioGroupAccessibilityProps()}>
                {radioButtons.map(renderRadioButton)}
            </Layer>
        );
    }
);
