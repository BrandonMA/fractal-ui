var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { useThemeColor } from '../../hooks';
import { InternalButton } from './InternalButton/InternalButton';
export function BaseButton(props) {
    var useSoftBackground = props.useSoftBackground, colorStyle = props.colorStyle, others = __rest(props, ["useSoftBackground", "colorStyle"]);
    var interactiveColor = useThemeColor(colorStyle);
    var textColor = useThemeColor('textColor');
    return (React.createElement(InternalButton, __assign({}, others, { textColor: useSoftBackground ? interactiveColor.base : textColor.base700, backgroundColor: useSoftBackground ? interactiveColor.base100 : interactiveColor.base, shadow: interactiveColor.shadow })));
}
//# sourceMappingURL=BaseButton.js.map