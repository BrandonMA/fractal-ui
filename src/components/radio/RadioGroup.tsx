import React, { forwardRef, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { RadioGroupProps, RadioItem } from './types';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';
import { RadioGroupItem } from './RadioGroupItem';

const RadioGroup = forwardRef(
    ({ value, defaultValue, radioButtons, onValueChange, ...others }: RadioGroupProps, ref: any): JSX.Element => {
        const [activeValue, setActiveValue] = useControllableState({ value, defaultValue: defaultValue ?? '', onChange: onValueChange });
        const { flexDirection } = others;

        const handleChange = useCallback(
            (value: string): void => {
                setActiveValue(value);
            },
            [setActiveValue]
        );

        // Memoizing the callback is hard because it depends on the active value, to it will be re generated every time they change it.
        // It makes more sense to create a new component that depends only on primitives, and memoize that, that way when the value changes only 2 components will update.
        const renderRadioButton = (item: RadioItem, index: number): JSX.Element => {
            return (
                <RadioGroupItem
                    key={item.value}
                    item={item}
                    isLastItem={index === radioButtons.length - 1}
                    flexDirection={flexDirection}
                    active={item.value == activeValue}
                    handleChange={handleChange}
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

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
