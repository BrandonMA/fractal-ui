import React, { useState, useCallback } from 'react';
import { useTheme, Chip, Box, Layer, Button, Text, AutocompleteTextField } from '../src';

interface Tag {
    id: string;
    value: string;
}

export function MultiSelectInput(): JSX.Element {
    const { colors, borderRadius, spacings, sizes } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState<Array<Tag>>([
        { id: '0', value: 'ventas' },
        { id: '1', value: 'vendidos' },
        { id: '2', value: 'vaca' },
        { id: '3', value: 'vela' }
    ]);
    const [selectedTags, setSelectedTags] = useState<Array<Tag>>([]);

    const handleSubmitEditing = () => {
        console.log('Enter');
        addNewTag(tag);
    };

    const addNewTag = (tag: string) => {
        const newTag = { id: `${tags.length}`, value: tag };
        setTags((currentTags) => [...currentTags, newTag]);
        addSelectedTag(newTag);
        setTag('');
    };

    const addSelectedTag = (tag: Tag) => {
        setSelectedTags((currentTags) => [...currentTags, tag]);
    };

    const clearTags = () => {
        setSelectedTags([]);
    };

    const handleSelect = (values: Tag | Array<Tag>) => {
        setSelectedTags(values as Array<Tag>);
    };

    const removeTag = (tag: Tag) => {
        setSelectedTags((currentTags) => currentTags.filter((item) => item.id != tag.id));
    };

    const renderItem = useCallback((item: Tag) => {
        return (
            <Chip margin={2} key={item.id} onCrossButtonPress={() => removeTag(item)}>
                <Text variant={'normal'}>{item.value}</Text>
            </Chip>
        );
    }, []);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'title3'} marginBottom={spacings.m}>
                Etiquetas
            </Text>
            <AutocompleteTextField
                value={tag}
                multiple
                options={tags}
                getOptionLabel={(option: Tag) => option.value}
                placeholder='Buscar'
                onSelect={handleSelect}
                controllableSelectedOptions={selectedTags}
                onChangeText={setTag}
                onSubmitEditing={handleSubmitEditing}
            />
            <Layer
                minHeight={sizes.textFieldHeight}
                overflow={'scroll'}
                flexDirection={'row'}
                flexWrap={'wrap'}
                marginTop={spacings.s}
                marginBottom={spacings.s}
                borderRadius={borderRadius.s}
                backgroundColor={colors.background}
            >
                {selectedTags.map(renderItem)}
            </Layer>
            <Button variant={'warning'} onPress={clearTags} text='Limpiar' />
        </Box>
    );
}
