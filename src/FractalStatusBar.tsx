import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useThemeIdentifier } from './context/hooks/useThemeIdentifier';

export function FractalStatusBar(): JSX.Element {
    const [currentThemeIdentifier] = useThemeIdentifier();

    if (Platform.OS === 'android') {
        return <StatusBar barStyle='light-content' />;
    } else {
        return <StatusBar barStyle={currentThemeIdentifier === 'light' ? 'dark-content' : 'light-content'} />;
    }
}
