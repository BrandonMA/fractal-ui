import React, { useState, forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { RadioButton } from './RadioButton';
import { RadioGroupProps, RadioItem } from './types';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';

export const RadioGroup = forwardRef(
    ({ radioButtons, onChange, ...others }: RadioGroupProps, ref: any): JSX.Element => {
        const { spacings } = useTheme();
        const [activeValue, setActiveValue] = useState('');

        const handleChange = (id: string, index: number): void => {
            setActiveValue(id);
            onChange(radioButtons[index]);
        };

        const renderRadioButton = (item: RadioItem, index: number): JSX.Element => {
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
                    onPress={() => handleChange(item.value, index)}
                />
            );
        };

        return (
            <Layer ref={ref} {...others} {...getRadioGroupAccessibilityProps()}>
                {radioButtons.map(renderRadioButton)}
            </Layer>
        );
    }
);
