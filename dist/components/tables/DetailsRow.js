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
import React, { forwardRef } from 'react';
import { Layer } from '../containers/Layer';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { Separator } from '../Separator';
import { useTheme } from '../../context';
const DetailsRow = forwardRef((_a, ref) => {
    var { title, details, addSeparator = false } = _a, others = __rest(_a, ["title", "details", "addSeparator"]);
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(HorizontalLayer, Object.assign({ ref: ref, alignItems: 'center', marginBottom: addSeparator ? spacings.s : undefined }, others),
            React.createElement(Layer, { flexGrow: 1 },
                React.createElement(Text, { variant: 'small' }, title)),
            React.createElement(Text, { variant: 'label' }, details)),
        addSeparator ? React.createElement(Separator, { marginBottom: spacings.s }) : null));
});
DetailsRow.displayName = 'DetailsRow';
export { DetailsRow };
//# sourceMappingURL=DetailsRow.js.map