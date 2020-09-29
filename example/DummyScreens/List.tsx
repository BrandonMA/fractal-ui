import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { useHistory, useLocation } from '../../src/ReactRouter';

export default function List(): JSX.Element {
    const [images, setImages] = useState<Array<string>>([]);
    const [count, setCount] = useState(0);
    const onPress = useCallback(() => setCount((x) => x + 1), []);
    const history = useHistory();
    const location = useLocation();
    const finalPath = location.pathname !== '/' ? `${location.pathname}/` : '/';

    useEffect(() => {
        const images = [];
        for (let i = 0; i < 5; i++) {
            images.push(`https://picsum.photos/${i}00/${i}00`);
        }
        setImages(images);
    }, []);

    return (
        <SafeAreaView>
            <ScrollView contentInset={{ top: 0, left: 0, bottom: 60, right: 0 }} contentInsetAdjustmentBehavior='automatic'>
                <Button title='Count' onPress={onPress} />
                <Text>{count}</Text>
                {images.map((image, index) => {
                    return (
                        <View key={index}>
                            <Image style={{ width: '100%', height: 200 }} source={{ uri: image }} />
                            <Button
                                onPress={() => {
                                    history.push(index % 2 === 0 ? `${finalPath}one` : `${finalPath}settings`);
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
