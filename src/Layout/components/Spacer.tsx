import styled from 'styled-components/native';
import { memo } from 'react';
import { Animated } from 'react-native';

interface SpacerProps {
    width: number;
    height: number;
}

export const Spacer = memo(styled(Animated.View)`
    width: ${(props: SpacerProps) => `${props.width ?? 0}px`};
    height: ${(props: SpacerProps) => `${props.height ?? 0}px`};
`);
