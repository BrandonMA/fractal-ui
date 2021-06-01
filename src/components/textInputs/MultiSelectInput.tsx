import React from 'react';
import { IDEnabled } from './AutoComplete/types';
import { AutoComplete } from './AutoComplete';
import { Button } from '../buttons/Button';
import { Layer } from '../containers';
import { ChipList } from '../ChipList';

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
    placeholder?: string;
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
    placeholder
}: MultiSelectInputProps<T>): JSX.Element {
    return (
        <Layer>
            <AutoComplete
                value={inputValue}
                multiple
                options={options}
                getOptionLabel={getOptionLabel}
                placeholder={placeholder}
                onSelect={onSelect}
                controllableSelectedOptions={controllableSelectedOptions}
                onChangeText={onChangeText}
            />
            <ChipList data={controllableSelectedOptions} getLabel={getOptionLabel} onItemPress={onDeletePress} />
            <Button variant={'warning'} onPress={onClearPress} text={clearButtonText} />
        </Layer>
    );
}
