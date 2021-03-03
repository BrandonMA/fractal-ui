import React from 'react';
import { View, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// const buggyColors = ['#FF1612', '#DB0D1B'];
const normalColors = ['#1281FF', '#0D63DB'];

const colors = normalColors;

export function ColorBug() {
    const color = useSharedValue(colors[0]);

    const toggleColor = () => {
        if (color.value === colors[0]) color.value = colors[1];
        else color.value = colors[0];
    };

    const style = useAnimatedStyle(() => ({
        backgroundColor: withTiming(color.value)
    }));

    return (
        <View>
            <Animated.View style={[style, { height: 100, width: 100 }]} />
            <Button title='toggle' onPress={toggleColor} />
        </View>
    );
}
