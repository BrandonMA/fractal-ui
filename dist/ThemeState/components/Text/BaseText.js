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
import React, { memo } from 'react';
import { useThemeColor } from '../../hooks/useThemeColor';
import { InternalText } from './InternalText';
export var BaseText = memo(function (props) {
    var textType = props.textType, others = __rest(props, ["textType"]);
    var textColor = useThemeColor('textColor');
    var color = function () {
        switch (textType) {
            case 'placeholder':
                return textColor.base300;
            case 'label':
                return textColor.base200;
            default:
                return textColor.base900;
        }
    };
    return React.createElement(InternalText, __assign({ selectable: false }, others, { color: color() }));
});
//# sourceMappingURL=BaseText.js.map