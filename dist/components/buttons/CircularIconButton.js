var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Button } from './Button';
import { useTheme } from '../../context/hooks/useTheme';
import { getCircularIconButtonAccessibilityProps } from './accessibility/getCircularIconButtonAccessibilityProps';
const CircularIconButton = (props) => {
    const { variant, children } = props, others = __rest(props, ["variant", "children"]);
    const { colors, sizes } = useTheme();
    const backgroundColorName = `${variant}InteractiveColor400`;
    const backgroundColor = colors[backgroundColorName];
    const pressedColorName = `${variant}InteractiveColor`;
    const pressedColor = colors[pressedColorName];
    return (React.createElement(Button, Object.assign({ variant: variant, backgroundColor: backgroundColor, pressedBackgroundColor: pressedColor, height: sizes.interactiveItemHeight, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getCircularIconButtonAccessibilityProps(), others), children));
};
CircularIconButton.displayName = 'CircularIconButton';
export { CircularIconButton };
//# sourceMappingURL=CircularIconButton.js.map