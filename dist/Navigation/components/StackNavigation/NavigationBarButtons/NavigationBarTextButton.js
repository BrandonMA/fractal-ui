import React from 'react';
import { BaseTextButton } from '../../../../ThemeState/components/Interactive/BaseTextButton';
export function NavigationBarTextButton(props) {
    var children = props.children, onPress = props.onPress;
    return (React.createElement(BaseTextButton, { colorStyle: 'mainInteractiveColor', textSize: 'md', onPress: onPress }, children));
}
//# sourceMappingURL=NavigationBarTextButton.js.map