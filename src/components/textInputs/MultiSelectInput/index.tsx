import React from 'react';
import { IDEnabled } from '../Autocomplete/types';
import { Autocomplete } from '../Autocomplete';
import { Button } from '../../buttons/Button';
import { ChosenItemsList } from './ChosenItemsList';
import { Layer } from '../../containers';

interface MultiSelectInputProps<T> {
    options: Array<T>;
    getOptionLabel: (option: T) => string;
    onSelect: (values: Array<T>) => void;
    onDeletePress: (item: T) => void;
    onClearPress: () => void;
    clearButtonText?: string;
    inputValue?: string;
    controllableSelectedOptions: Array<T>;
    onChangeText: (text: string) => void;
    onSubmitEditing: () => void;
}

export function MultiSelectInput<T extends IDEnabled>({
    options,
    getOptionLabel,
    clearButtonText = 'Limpiar',
    onSelect,
    onClearPress,
    onDeletePress,
    inputValue,
    controllableSelectedOptions,
    onChangeText,
    onSubmitEditing
}: MultiSelectInputProps<T>): JSX.Element {
    return (
        <Layer>
            <Autocomplete
                value={inputValue}
                multiple
                options={options}
                getOptionLabel={getOptionLabel}
                placeholder='Buscar'
                onSelect={onSelect}
                controllableSelectedOptions={controllableSelectedOptions}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
            <ChosenItemsList data={controllableSelectedOptions} getLabel={getOptionLabel} onItemPress={onDeletePress} />
            <Button variant={'warning'} onPress={onClearPress} text={clearButtonText} />
        </Layer>
    );
}
