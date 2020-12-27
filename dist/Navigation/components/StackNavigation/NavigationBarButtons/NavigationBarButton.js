import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useThemeColor } from '../../../../ThemeState/hooks/useThemeColor';
export function NavigationBarButton(props) {
    var children = props.children, onPress = props.onPress;
    var color = useThemeColor('mainInteractiveColor');
    return React.createElement(TouchableOpacity, { onPress: onPress }, children(color.base, 20));
}
//# sourceMappingURL=NavigationBarButton.js.map