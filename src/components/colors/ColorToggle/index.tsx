import React, { useCallback } from 'react';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BasePressable, BasePressableProps } from '../../baseComponents/BasePressable';
import { Animated } from 'react-native';
import { useColorToggleAnimation } from './hooks/useColorToggleAnimation';

const Entypo = Animated.createAnimatedComponent(BaseEntypo);

export interface ColorToggleProps extends Partial<Omit<BasePressableProps, 'backgroundColor'>> {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}

export function ColorToggle({ onActiveChange, backgroundColor, active, ...others }: ColorToggleProps): JSX.Element {
    const [, setActive, iconStyle] = useColorToggleAnimation(active);

    const handleControlledActiveToggle = useCallback(() => {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);

    const handleUncontrolledActiveToggle = useCallback(() => {
        setActive((internalActive) => {
            if (onActiveChange != null) {
                onActiveChange(!internalActive, backgroundColor);
            }
            return !internalActive;
        });
    }, [setActive, onActiveChange, backgroundColor]);

    const handlePress = useCallback(() => {
        if (active != null) {
            handleControlledActiveToggle();
        } else {
            handleUncontrolledActiveToggle();
        }
    }, [active, handleUncontrolledActiveToggle, handleControlledActiveToggle]);

    return (
        <BasePressable
            onPress={handlePress}
            width={40}
            height={40}
            borderRadius={'xl'}
            justifyContent={'center'}
            alignItems={'center'}
            style={{ backgroundColor }}
            {...others}
        >
            <Entypo selectable={false} name='check' size={24} color='white' style={iconStyle} />
        </BasePressable>
    );
}
