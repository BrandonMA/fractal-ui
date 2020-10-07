import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Platform } from 'react-native';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

interface StackScreenProps extends NavigationRouteProps {
    visibleOnStack?: boolean;
    initialScreen?: boolean;
}

export function StackScreen(props: StackScreenProps): JSX.Element {
    const { visibleOnStack, style, initialScreen, ...others } = props;
    const history = useHistory();
    const fadeAnim = useRef(new Animated.Value(initialScreen ? 1 : 0)).current;

    const fade = useCallback(
        (active: boolean) => {
            Animated.timing(fadeAnim, {
                toValue: active ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        },
        [fadeAnim]
    );

    const handleGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    useEffect(() => {
        if (Platform.OS === 'web') {
            fade(visibleOnStack ?? false);
        }
    }, [visibleOnStack, fade]);

    return (
        <NavigationRoute
            {...others}
            style={[style, { opacity: Platform.OS === 'web' ? ((fadeAnim as unknown) as number) : 1 }]}
            onDismissed={handleGoBack}
        />
    );
}
