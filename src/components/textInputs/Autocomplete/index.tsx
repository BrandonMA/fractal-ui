import React, { useState } from 'react';
import { useControllableState } from '../../../hooks/useControllableState';
import { BaseAutocomplete } from './BaseAutocomplete';
import { AutocompleteProps, IDEnabled } from './types';

export function Autocomplete<T extends IDEnabled>({
    options,
    getOptionLabel,
    onSelect,
    controllableSelectedOptions,
    multiple,
    onChangeText,
    value,
    ...searchBarProps
}: AutocompleteProps<T>): JSX.Element {
    const [suggestionsVisible, setSuggestionsVisible] = useState(false);
    const [userInput, setUserInput] = useControllableState(value, '', onChangeText);
    const [filteredOptions, setFilteredOptions] = useState<Array<T>>([]);

    const handleSelect = (selectedOptions: Array<T>) => {
        if (multiple) {
            onSelect(selectedOptions);
        } else {
            onSelect(selectedOptions[0]);
        }
    };
    const [selectedOptions, setSelectedOptions] = useControllableState(controllableSelectedOptions, [], handleSelect);
    const selectedOptionsIds = selectedOptions.map((selectedOption) => selectedOption.id);

    const handleSearch = (query: string) => {
        const newFilteredOptions = options.filter((option) => {
            const candidate = getOptionLabel(option);
            const clearUserInput = query.trim();
            return candidate.toLowerCase().indexOf(clearUserInput.toLowerCase()) > -1;
        });
        setSuggestionsVisible(true);
        setFilteredOptions(newFilteredOptions);
    };

    const addSelectedOption = (option: T) => {
        if (multiple) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions([option]);
        }
    };

    const removeSelectedOption = (option: T) => {
        setSelectedOptions(selectedOptions.filter((item) => item.id != option.id));
    };

    const onOptionPress = (option: T, isSelected: boolean, keepInput?: boolean) => {
        if (!keepInput && multiple) {
            setUserInput('');
        }
        if (!multiple) {
            setUserInput(getOptionLabel(option));
        }
        setSuggestionsVisible(false);
        if (!isSelected) {
            addSelectedOption(option);
        } else {
            removeSelectedOption(option);
        }
    };

    const hideSuggestions = () => setSuggestionsVisible(false);

    const handleChangeText = (text: string) => {
        setUserInput(text);
    };

    return (
        <BaseAutocomplete
            value={userInput}
            onSearch={handleSearch}
            onChangeText={handleChangeText}
            suggestionsVisible={suggestionsVisible}
            hideSuggestions={hideSuggestions}
            filteredData={filteredOptions}
            getLabel={getOptionLabel}
            onItemPress={onOptionPress}
            selectedIds={selectedOptionsIds}
            multiple={multiple}
            {...searchBarProps}
        />
    );
}