import React, { useMemo } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute/NavigationRoute';
import { NavigationBar, NavigationBarProps } from './NavigationBar';
import { Platform } from 'react-native';
import { useThemeColor } from '../../../ThemeState';
import { PlatformBar } from './PlatformBar';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: NavigationBarProps;
}

const emptyConfig = {};
function usePlatformNavBar() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const navigationBarColor = useThemeColor('navigationBarColor');
        const mainInteractiveColor = useThemeColor('mainInteractiveColor');
        return useMemo(() => {
            return {
                backgroundColor: navigationBarColor.base,
                titleColor: navigationBarColor.base900,
                color: mainInteractiveColor.base
            };
        }, [navigationBarColor, mainInteractiveColor]);
    } else {
        return emptyConfig;
    }
}

export function StackScreen(props: StackScreenProps): JSX.Element {
    const { children, navBarConfig, stackPresentation, path, ...others } = props;
    const { goBack } = useHistory();
    const styleProps = usePlatformNavBar();

    return (
        <NavigationRoute {...others} onDismissed={goBack} stackPresentation={stackPresentation} path={path}>
            {stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android') ? (
                <NavigationBar {...navBarConfig} path={path} />
            ) : navBarConfig != null ? (
                <PlatformBar {...navBarConfig} {...styleProps} path={path} />
            ) : null}
            {children}
        </NavigationRoute>
    );
}
