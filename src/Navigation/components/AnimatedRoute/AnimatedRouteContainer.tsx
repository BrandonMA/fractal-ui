import React, { useEffect, useRef } from 'react';
import { match } from '../../../ReactRouter';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation } from '../../../Animations/hooks/useHideAnimation';
import { useShowAnimation } from '../../../Animations/hooks/useShowAnimation';
import { isMatchExact } from '../../util/isMatchExact';

export interface AnimatedRouteContainerProps {
    match: match | null;
    children: JSX.Element;
}

export function AnimatedRouteContainer(props: AnimatedRouteContainerProps) {
    const opacityValue = useRef(new Animated.Value(1)).current;
    const { match, children } = props;
    const hide = useHideAnimation(opacityValue);
    const show = useShowAnimation(opacityValue);

    useEffect(() => {
        if (isMatchExact(match)) {
            show();
        } else {
            hide();
        }
    }, [match, hide, show]);

    return (
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isMatchExact(match) ? 1000 : 0 }]}>
            {children}
        </Animated.View>
    );
}
