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
import { useTheme } from '@shopify/restyle';
import React, { useMemo } from 'react';
import { BaseText } from '../baseComponents/BaseText';
import { BasePressable } from '../baseComponents/BasePressable';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
export function Button(props) {
    var variant = props.variant, children = props.children, addShadow = props.addShadow, reduceColor = props.reduceColor, text = props.text, others = __rest(props, ["variant", "children", "addShadow", "reduceColor", "text"]);
    var theme = useTheme();
    var _a = useBaseButtonAnimations(props), handlePressIn = _a[0], handlePressOut = _a[1], style = _a[2];
    var ripple = useMemo(function () {
        return {
            color: theme.colors.white,
            borderless: true
        };
    }, [theme]);
    return (React.createElement(BasePressable, __assign({ flexDirection: 'row', backgroundColor: reduceColor ? variant + "100" : variant, borderRadius: 'buttonRadius', android_ripple: ripple, justifyContent: 'center', alignItems: 'center', height: theme.interactiveItems.buttonHeight, onPressIn: handlePressIn, onPressOut: handlePressOut, style: style, shadowColor: addShadow ? 'shadowColor' : undefined, shadowOffset: addShadow ? theme.shadowProperties.offset : undefined, shadowRadius: addShadow ? theme.shadowProperties.radius : undefined, shadowOpacity: addShadow ? theme.shadowProperties.opacity : undefined }, others),
        children,
        text != null ? (React.createElement(BaseText, { selectable: false, paddingLeft: children != null ? 'xs' : undefined, fontWeight: '700', color: reduceColor ? variant : 'white' }, text)) : null));
}
//# sourceMappingURL=Button.js.map