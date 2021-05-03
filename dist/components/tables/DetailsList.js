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
import React, { Fragment, useCallback, forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Box } from '../containers';
import { Separator } from '../Separator';
import { Text } from '../text';
import { DetailsRow } from './DetailsRow';
import { getListItemAccessibilityProps } from './accessibility/getListItemAccessibilityProps';
const DetailsList = forwardRef((_a, ref) => {
    var { title, details, titleTextVariant = 'title', titleColorVariant = 'text' } = _a, others = __rest(_a, ["title", "details", "titleTextVariant", "titleColorVariant"]);
    const { colors, spacings } = useTheme();
    const colorName = titleColorVariant !== 'text' ? `${titleColorVariant}InteractiveColor` : titleColorVariant;
    const color = colors[colorName];
    const renderItem = useCallback((item, index) => {
        const isLastItem = index === details.length - 1;
        return (React.createElement(Fragment, { key: item[0] },
            React.createElement(DetailsRow, Object.assign({ title: item[0], details: item[1], marginBottom: isLastItem ? undefined : spacings.s }, getListItemAccessibilityProps())),
            isLastItem ? null : React.createElement(Separator, { marginBottom: spacings.s })));
    }, [details.length, spacings.s]);
    return (React.createElement(Box, Object.assign({ ref: ref }, others),
        React.createElement(Text, { variant: titleTextVariant, color: color, marginBottom: spacings.m }, title),
        details.map(renderItem)));
});
DetailsList.displayName = 'DetailsList';
export { DetailsList };
//# sourceMappingURL=DetailsList.js.map