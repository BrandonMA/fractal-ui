import React, { useState, useCallback } from 'react';
import { Layer } from '../../../containers/Layer';
import { TextFieldButton } from '../../TextFieldButton';
import { BaseAutocompleteProps, IDEnabled } from '../types';
import { AutocompleteModal } from './AutocompleteModal';

export function BaseAutocomplete<T extends IDEnabled>({
    doneText = 'Done',
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple,
    value,
    placeholder,
    onChangeText,
    onSearch,
    ...searchBarProps
}: BaseAutocompleteProps<T>): JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);

    const hideModal = useCallback(() => setModalVisible(false), []);
    const showModal = useCallback(() => setModalVisible(true), []);

    const handleItemPress = (option: T, isSelected: boolean) => {
        onItemPress(option, isSelected, true);
    };

    return (
        <Layer>
            <TextFieldButton onPress={showModal} value={value} placeholder={placeholder} />
            <AutocompleteModal
                visible={modalVisible}
                hideModal={hideModal}
                doneText={doneText}
                filteredData={filteredData}
                getLabel={getLabel}
                onItemPress={handleItemPress}
                selectedIds={selectedIds}
                multiple={multiple}
                value={value}
                onChangeText={onChangeText}
                onSearch={onSearch}
                {...searchBarProps}
            />
        </Layer>
    );
}
