import React, { useCallback } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
import { SwitchProps } from './types';

const styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 16, translateY: 0 }
};

export function Switch({ value, onValueChange }: SwitchProps): JSX.Element {
    const { colors, shadows } = useTheme();

    const onPress = useCallback(() => {
        if (onValueChange) {
            onValueChange(!value);
        }
    }, [onValueChange, value]);

    return (
        <Pressable
            flexDirection={'row'}
            height={24}
            width={40}
            borderRadius={12}
            paddingLeft={2}
            paddingRight={2}
            onPress={onPress}
            alignItems='center'
            backgroundColor={colors.mainInteractiveColor}
        >
            <Layer
                initial={'start'}
                animate={value ? 'end' : 'start'}
                variants={styleVariants}
                height={20}
                width={20}
                borderRadius={10}
                backgroundColor={colors.white}
                boxShadow={shadows.mainShadow}
            />
        </Pressable>
    );
}
