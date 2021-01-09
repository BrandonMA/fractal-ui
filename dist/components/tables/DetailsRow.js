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
import { HorizontalView } from '../containers/HorizontalView';
import { Text } from '../Text';
export function DetailsRow(_a) {
    var title = _a.title, details = _a.details, others = __rest(_a, ["title", "details"]);
    return (React.createElement(HorizontalView, __assign({ alignItems: 'center' }, others),
        React.createElement(BaseBox, { flexGrow: 1 },
            React.createElement(Text, { variant: 'smallText' }, title)),
        React.createElement(Text, { variant: 'label' }, details)));
}
//# sourceMappingURL=DetailsRow.js.map