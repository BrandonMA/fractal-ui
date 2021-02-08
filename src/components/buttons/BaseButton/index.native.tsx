import React, { useCallback } from 'react';
import { ButtonProps } from './types';
import { Pressable } from 'react-native';
import { Box } from '../../containers/Box';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function BaseButton({ onPress, ...others }: ButtonProps): JSX.Element {
    const scaleAnimatedValue = useSharedValue(1);

    const toggleValue = useCallback(() => {
        if (scaleAnimatedValue.value === 1) {
            scaleAnimatedValue.value = withSpring(0.9);
        } else {
            scaleAnimatedValue.value = withSpring(1);
        }
    }, [scaleAnimatedValue]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleAnimatedValue.value }]
        };
    });

    return (
        <Pressable onPress={onPress} onPressIn={toggleValue} onPressOut={toggleValue}>
            <Box {...others} style={animatedStyles} />
        </Pressable>
    );
}
