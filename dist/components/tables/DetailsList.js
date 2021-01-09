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
import { Cell } from '../containers/Cell';
import { Separator } from '../Separator';
import { Text } from '../Text';
import { DetailsRow } from './DetailsRow';
export var DetailsList = memo(function (_a) {
    var title = _a.title, details = _a.details, titleVariant = _a.titleVariant, others = __rest(_a, ["title", "details", "titleVariant"]);
    var renderItem = useCallback(function (item, index) {
        var isLastItem = index === details.length - 1;
        return (React.createElement(Fragment, { key: item[0] },
            React.createElement(DetailsRow, { title: item[0], details: item[1], marginBottom: isLastItem ? undefined : 's' }),
            isLastItem ? null : React.createElement(Separator, { marginBottom: 's' })));
    }, [details.length]);
    return (React.createElement(Cell, __assign({}, others),
        React.createElement(Text, { variant: titleVariant, marginBottom: 'm' }, title),
        details.map(renderItem)));
});
//# sourceMappingURL=DetailsList.js.map