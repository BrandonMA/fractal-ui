import React, { useEffect, useRef } from 'react';
import { match } from '../../../ReactRouter';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation } from '../../../Animations/hooks/useHideAnimation';
import { useShowAnimation } from '../../../Animations/hooks/useShowAnimation';

export interface AnimatedRouteContainerProps {
    match: match | null;
    children: JSX.Element;
}

function isActive(match: match | null) {
    return match && match.isExact;
}

export function AnimatedRouteContainer(props: AnimatedRouteContainerProps) {
    const opacityValue = useRef(new Animated.Value(1)).current;
    const { match, children } = props;
    const hide = useHideAnimation(opacityValue);
    const show = useShowAnimation(opacityValue);

    useEffect(() => {
        if (isActive(match)) {
            show();
        } else {
            hide();
        }
    }, [match, hide, show]);

    return (
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isActive(match) ? 1000 : 0 }]}>
            {children}
        </Animated.View>
    );
}
