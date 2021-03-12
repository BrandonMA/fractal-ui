import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer/index.native';
import { RadioButton } from './RadioButton';
import { RadioGroupProps, RadioItem } from './types';

export function RadioGroup({ radioButtons, onChange, ...others }: RadioGroupProps): JSX.Element {
    const { spacings } = useTheme();
    const [activeID, setActiveID] = useState('');

    const handleChange = (id: string, index: number): void => {
        setActiveID(id);
        onChange(radioButtons[index]);
    };

    const renderRadioButton = (item: RadioItem, index: number): JSX.Element => {
        const isLastItem = index === radioButtons.length - 1;
        const { flexDirection } = others;

        return (
            <RadioButton
                marginBottom={flexDirection != 'row' && isLastItem ? 0 : spacings.s}
                marginRight={flexDirection == 'row' && isLastItem ? 0 : spacings.s}
                key={item.id}
                active={item.id == activeID}
                label={item.label}
                onPress={() => handleChange(item.id, index)}
            />
        );
    };

    return <Layer {...others}>{radioButtons.map(renderRadioButton)}</Layer>;
}
