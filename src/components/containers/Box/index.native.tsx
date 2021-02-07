import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { extractLayoutStyles } from '../../../styles/extractLayoutStyles';
import { extractBackgroundColor } from '../../../styles/extractBackgroundColor';
import { BoxProps } from './types';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const StyledBox = styled(Reanimated.View)`
    ${extractBackgroundColor};
    ${extractLayoutStyles};
`;

export function Box({ initial, animate, ...others }: BoxProps): JSX.Element {
    const opacityAnimatedValue = useSharedValue(initial?.opacity ?? 1);
    const widthAnimatedValue = useSharedValue(initial?.width ?? undefined);
    const heightAnimatedValue = useSharedValue(initial?.height ?? undefined);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacityAnimatedValue.value,
            width: widthAnimatedValue.value,
            height: heightAnimatedValue.value
        };
    });

    useEffect(() => {
        opacityAnimatedValue.value = withSpring(animate?.opacity ?? 1);

        if (animate?.width) {
            widthAnimatedValue.value = withSpring(animate.width);
        }

        if (animate?.height) {
            heightAnimatedValue.value = withSpring(animate.height);
        }
    }, [opacityAnimatedValue, widthAnimatedValue, heightAnimatedValue, animate]);

    return <StyledBox {...others} style={animatedStyles} />;
}
