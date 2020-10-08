import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { useHistory, useLocation } from '../../src/ReactRouter';
import { FullScreenScrollView } from '../../src/Layout/components/FullScreenScrollView';

export default function List(): JSX.Element {
    const [images, setImages] = useState<Array<string>>([]);
    const [count, setCount] = useState(0);
    const onPress = useCallback(() => setCount((x) => x + 1), []);
    const history = useHistory();
    const location = useLocation();
    const finalPath = location.pathname !== '/' ? `${location.pathname}/` : '/';

    useEffect(() => {
        const images = [];
        for (let i = 0; i < 10; i++) {
            images.push(`https://picsum.photos/${i}00/${i}00`);
        }
        setImages(images);
    }, []);

    return (
        <FullScreenScrollView>
            <Button title='Count' onPress={onPress} />
            <Text>{count}</Text>
            {images.map((image, index) => {
                return (
                    <View key={index}>
                        {/* <Image style={{ width: '100%', height: 200 }} source={{ uri: image }} /> */}
                        <Button
                            onPress={() => {
                                history.push(index % 2 === 0 ? `${finalPath}one` : `${finalPath}settings`);
                            }}
                            title={image}
                        />
                    </View>
                );
            })}
        </FullScreenScrollView>
    );
}
