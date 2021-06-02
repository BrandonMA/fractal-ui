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
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Separator } from '../../Separator';
import { useTheme } from '../../../context';
const BaseRow = forwardRef((_a, ref) => {
    var { addSeparator = false } = _a, others = __rest(_a, ["addSeparator"]);
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(HorizontalLayer, Object.assign({ ref: ref, alignItems: 'center', marginBottom: addSeparator ? spacings.s : undefined }, others)),
        addSeparator ? React.createElement(Separator, { marginBottom: spacings.s }) : null));
});
BaseRow.displayName = 'BaseRow';
export { BaseRow };
//# sourceMappingURL=BaseRow.js.map