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
import React from 'react';
import { BaseText } from '../baseComponents/BaseText';
import { BasePressable } from '../baseComponents/BasePressable';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
import { ActivityIndicator } from '../ActivityIndicator';
export function Button(props) {
    var _a = props.variant, variant = _a === void 0 ? 'mainInteractiveColor' : _a, children = props.children, addShadow = props.addShadow, loading = props.loading, reduceColor = props.reduceColor, text = props.text, _b = props.activityIndicatorColor, activityIndicatorColor = _b === void 0 ? 'white' : _b, others = __rest(props, ["variant", "children", "addShadow", "loading", "reduceColor", "text", "activityIndicatorColor"]);
    var _c = useTheme(), interactiveItems = _c.interactiveItems, shadowProperties = _c.shadowProperties;
    var _d = useBaseButtonAnimations(props), handlePressIn = _d[0], handlePressOut = _d[1], style = _d[2];
    var loadingColor = variant + "300";
    var normalBackgroundColor = reduceColor ? variant + "100" : variant;
    var finalBackgroundColor = loading ? loadingColor : normalBackgroundColor;
    return (React.createElement(BasePressable, __assign({ flexDirection: 'row', backgroundColor: finalBackgroundColor, borderRadius: 'buttonRadius', justifyContent: 'center', paddingHorizontal: 'm', alignItems: 'center', android_ripple: null, height: interactiveItems.buttonHeight, onPressIn: handlePressIn, onPressOut: handlePressOut, style: style, shadowColor: addShadow ? 'shadowColor' : undefined, shadowOffset: addShadow ? shadowProperties.offset : undefined, shadowRadius: addShadow ? shadowProperties.radius : undefined, shadowOpacity: addShadow ? shadowProperties.opacity : undefined, pointerEvents: loading ? 'none' : 'auto' }, others),
        loading ? React.createElement(ActivityIndicator, { color: activityIndicatorColor }) : children,
        text && !loading ? (React.createElement(BaseText, { selectable: false, paddingLeft: children != null ? 'xs' : undefined, variant: 'button', color: reduceColor ? variant : 'white' }, text)) : null));
}
//# sourceMappingURL=Button.js.map