import React, { useState, useCallback } from 'react';
import { useTheme, Chip, Box, Layer, Button, Text, TextField } from '../src';

export function MultiSelectInput(): JSX.Element {
    const { colors, borderRadius, spacings } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

    const onEnterPressed = (e: { key: string }) => {
        if (e.key === 'Enter') {
            addTag(tag);
        }
    };

    // This function is for native event
    const submitEditing = () => {
        addTag(tag);
    };

    const addTag = (item: string) => {
        if (item.length > 0) {
            setTags([...tags, { key: tags.length, name: item }]);
            setTag('');
        }
    };

    const clearTags = () => {
        setTags([]);
    };

    const renderItem = useCallback(
        (item) => {
            return (
                <Chip key={item.key} marginRight={spacings.s}>
                    <Text variant={'normal'}>{item.name}</Text>
                </Chip>
            );
        },
        [spacings.s]
    );

    return (
        <Box width={'50%'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'title3'} marginBottom={spacings.m}>
                Etiquetas
            </Text>
            <TextField
                placeholder='Buscar'
                value={tag}
                onKeyDown={onEnterPressed}
                onSubmitEditing={submitEditing}
                onChangeText={(value) => setTag(value)}
            />
            <Layer
                maxHeight={200}
                overflow={'scroll'}
                flexDirection={'row'}
                padding={spacings.s}
                marginTop={spacings.s}
                marginBottom={spacings.s}
                borderRadius={borderRadius.s}
                backgroundColor={colors.background}
            >
                {tags.map(renderItem)}
            </Layer>
            <Button variant={'warning'} onPress={clearTags}>
                <Text variant={'button'}>Limpiar</Text>
            </Button>
        </Box>
    );
}
