import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';
import { Screen, ScreenStackHeaderConfig } from 'react-native-screens';

function List() {
    const [images, setImages] = useState<Array<string>>([]);
    const [count, setCount] = useState(0);
    const onPress = useCallback(() => setCount((x) => x + 1), []);
    const history = useHistory();

    useEffect(() => {
        const images = [];
        for (let i = 0; i < 5; i++) {
            images.push(`https://picsum.photos/${i}00/${i}00`);
        }
        setImages(images);
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Button title='Count' onPress={onPress} />
                <Text>{count}</Text>
                {images.map((image, index) => {
                    return (
                        <View key={index}>
                            <Image style={{ width: '100%', height: 200 }} source={{ uri: image }} />
                            <Button
                                onPress={() => {
                                    console.log(history.location.pathname);
                                    history.push(`${history.location.pathname}/prueba/chocolate`);
                                    console.log(history.location.pathname);
                                }}
                                title={image}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export function Detail(): JSX.Element {
    const history = useHistory();
    return (
        <Screen
            stackPresentation='push'
            style={StyleSheet.absoluteFill}
            onDismissed={() => {
                history.goBack();
            }}
        >
            <ScreenStackHeaderConfig title='Detail' hidden={false} />
            <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
                <Button
                    onPress={() => {
                        history.goBack();
                    }}
                    title='Back'
                />
            </SafeAreaView>
        </Screen>
    );
}

export const One = (): JSX.Element => <List />;
export const Two = (): JSX.Element => <List />;
export const Three = (): JSX.Element => <List />;
export const Four = (): JSX.Element => <List />;
export const Five = (): JSX.Element => <List />;
