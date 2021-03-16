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
import React, { Fragment, memo, useCallback } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Box } from '../containers';
import { Separator } from '../Separator';
import { Text } from '../text';
import { DetailsRow } from './DetailsRow';
export var DetailsList = memo(function (_a) {
    var title = _a.title, details = _a.details, _b = _a.titleTextVariant, titleTextVariant = _b === void 0 ? 'title' : _b, _c = _a.titleColorVariant, titleColorVariant = _c === void 0 ? 'text' : _c, others = __rest(_a, ["title", "details", "titleTextVariant", "titleColorVariant"]);
    var _d = useTheme(), colors = _d.colors, spacings = _d.spacings;
    var colorName = titleColorVariant !== 'text' ? titleColorVariant + "InteractiveColor" : titleColorVariant;
    var color = colors[colorName];
    var renderItem = useCallback(function (item, index) {
        var isLastItem = index === details.length - 1;
        return (React.createElement(Fragment, { key: item[0] },
            React.createElement(DetailsRow, { title: item[0], details: item[1], marginBottom: isLastItem ? undefined : spacings.s }),
            isLastItem ? null : React.createElement(Separator, { marginBottom: spacings.s })));
    }, [details.length, spacings.s]);
    return (React.createElement(Box, __assign({}, others),
        React.createElement(Text, { variant: titleTextVariant, color: color, marginBottom: spacings.m }, title),
        details.map(renderItem)));
});
//# sourceMappingURL=DetailsList.js.map