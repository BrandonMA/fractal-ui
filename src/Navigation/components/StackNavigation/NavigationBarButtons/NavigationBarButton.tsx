import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useThemeColor } from '../../../../ThemeState/hooks/useThemeColor';

export interface NavigationBarButtonProps {
    children: (color: string, size: number) => JSX.Element;
    onPress?: () => void;
}

export function NavigationBarButton(props: NavigationBarButtonProps): JSX.Element {
    const { children, onPress } = props;
    const color = useThemeColor('mainInteractiveColor');
    return <TouchableOpacity onPress={onPress}>{children(color.base, 20)}</TouchableOpacity>;
}
