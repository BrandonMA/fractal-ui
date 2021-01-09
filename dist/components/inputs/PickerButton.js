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
import { useTheme } from '@shopify/restyle';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { Text } from '../Text';
import { BaseBox } from '../baseComponents/BaseBox';
import { BaseTouchableOpacity } from '../baseComponents/BaseTouchableOpacity';
var Entypo = memo(BaseEntypo);
export function PickerButton(_a) {
    var children = _a.children, others = __rest(_a, ["children"]);
    var _b = useTheme(), interactiveItems = _b.interactiveItems, colors = _b.colors;
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseTouchableOpacity, __assign({ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 's', borderRadius: 'textFieldRadius', height: interactiveItems.textFieldHeight, backgroundColor: 'textFieldColor' }, others),
            React.createElement(BaseBox, { flexGrow: 1, justifyContent: 'center' },
                React.createElement(Text, { fontSize: 14 }, children)),
            React.createElement(BaseBox, { alignSelf: 'center' },
                React.createElement(Entypo, { name: 'chevron-down', size: 21, color: colors.placeholderColor })))));
}
//# sourceMappingURL=PickerButton.js.map