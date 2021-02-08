import React, { useCallback } from 'react';
import { BaseButtonProps } from './types';
import { Pressable, StyleSheet } from 'react-native';
import { Box } from '../../containers/Box';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%'
    }
});

export function BaseButton({ onPress, backgroundColor, pressedBackgroundColor, ...others }: BaseButtonProps): JSX.Element {
    const scaleAnimatedValue = useSharedValue(1);
    const backgroundColorValue = useSharedValue<string | undefined | number>(backgroundColor);

    const toggleValue = useCallback(() => {
        if (scaleAnimatedValue.value === 1) {
            scaleAnimatedValue.value = withSpring(0.9);

            if (pressedBackgroundColor) {
                backgroundColorValue.value = withSpring(pressedBackgroundColor);
            }
        } else {
            scaleAnimatedValue.value = withSpring(1);

            if (backgroundColor) {
                backgroundColorValue.value = withSpring(backgroundColor);
            }
        }
    }, [scaleAnimatedValue, backgroundColorValue, pressedBackgroundColor, backgroundColor]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleAnimatedValue.value }],
            backgroundColor: backgroundColorValue.value
        };
    });

    return (
        <Pressable style={styles.buttonContainer} onPress={onPress} onPressIn={toggleValue} onPressOut={toggleValue}>
            <Box {...others} backgroundColor={backgroundColor} style={animatedStyles} />
        </Pressable>
    );
}
