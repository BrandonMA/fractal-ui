import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BasePressable, BasePressableProps } from '../baseComponents/BasePressable';
import { useShowAnimation } from '../../animationHooks/useShowAnimation';
import { Animated } from 'react-native';
import { useHideAnimation } from '../../animationHooks/useHideAnimation';

const Entypo = Animated.createAnimatedComponent(BaseEntypo);

export interface ColorToggleProps extends Omit<BasePressableProps, 'backgroundColor'> {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}

export function ColorToggle(props: ColorToggleProps): JSX.Element {
    const { onActiveChange, backgroundColor, active, ...others } = props;
    const [internalActive, setActive] = useState(false);

    const animatedValue = useRef(new Animated.Value(0)).current;
    const showAnimation = useShowAnimation(animatedValue);
    const hideAnimation = useHideAnimation(animatedValue);

    const iconStyle = useMemo(() => {
        return { opacity: animatedValue, transform: [{ scale: animatedValue }] };
    }, [animatedValue]);

    const handleControlledActiveToggle = useCallback(() => {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);

    const handleUncontrolledActiveToggle = useCallback(() => {
        setActive((currentValue) => {
            if (onActiveChange != null) {
                onActiveChange(!currentValue, backgroundColor);
            }
            return !currentValue;
        });
    }, [setActive, onActiveChange, backgroundColor]);

    const handlePress = useCallback(() => {
        if (active != null) {
            handleControlledActiveToggle();
        } else {
            handleUncontrolledActiveToggle();
        }
    }, [active, handleUncontrolledActiveToggle, handleControlledActiveToggle]);

    useEffect(() => {
        if (internalActive || active) {
            showAnimation();
        } else {
            hideAnimation();
        }
    }, [internalActive, showAnimation, hideAnimation, active]);

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
