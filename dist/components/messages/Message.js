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
import { BaseBox } from '../baseComponents/BaseBox';
import { Text } from '../Text';
import { HorizontalView } from '../containers';
import { useTheme } from '@shopify/restyle';
export function Message(_a) {
    var messageType = _a.messageType, title = _a.title, icon = _a.icon, description = _a.description, others = __rest(_a, ["messageType", "title", "icon", "description"]);
    var colors = useTheme().colors;
    var backgroundColor = messageType + "InteractiveColor100";
    var titleVariant = messageType + "InteractiveTitle";
    var textVariant = messageType + "InteractiveColor";
    return (React.createElement(BaseBox, __assign({ padding: 'cell', borderRadius: 'cellRadius', backgroundColor: backgroundColor }, others),
        React.createElement(HorizontalView, { alignItems: 'center', marginBottom: 'xs' },
            icon != null ? icon(colors[textVariant]) : null,
            React.createElement(Text, { marginLeft: icon != null ? 's' : undefined, variant: titleVariant }, title)),
        React.createElement(Text, { variant: textVariant }, description)));
}
//# sourceMappingURL=Message.js.map