import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Animated, Platform } from 'react-native';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';
import { NavigationBarInsetsContext } from './NavigationBarInsetsProvider';

interface StackScreenProps extends NavigationRouteProps {
    visibleOnStack?: boolean;
    initialScreen?: boolean;
}

export function StackScreen(props: StackScreenProps): JSX.Element {
    const { visibleOnStack, style, initialScreen, children, ...others } = props;
    const history = useHistory();
    const fadeAnim = useRef(new Animated.Value(initialScreen ? 1 : 0)).current;
    const childrenArray = React.Children.toArray(children);
    const navigationBarInsets = useContext(NavigationBarInsetsContext);

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

    useEffect(() => {
        if (childrenArray.length === 2) {
            const firstChild = childrenArray[0] as JSX.Element;
            if (firstChild.type === 'RNSScreenStackHeaderConfig' && firstChild.props.hidden === false) {
                const top = 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
                if (top !== navigationBarInsets.insets.top) {
                    navigationBarInsets.setInsets({ top, right: 0, bottom: 0, left: 0 });
                }
            }
        }
    }, [childrenArray, navigationBarInsets]);

    return (
        <NavigationRoute
            {...others}
            style={[style, { opacity: Platform.OS === 'web' ? ((fadeAnim as unknown) as number) : 1 }]}
            onDismissed={handleGoBack}
        >
            {children}
        </NavigationRoute>
    );
}
