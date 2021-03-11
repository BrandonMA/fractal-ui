import React, { useCallback } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
import { SwitchProps } from './types';

const styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 20, translateY: 0 }
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
            height={30}
            width={50}
            borderRadius={15.5}
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
                height={26}
                width={26}
                borderRadius={13}
                backgroundColor={colors.white}
                boxShadow={shadows.mainShadow}
            />
        </Pressable>
    );
}
