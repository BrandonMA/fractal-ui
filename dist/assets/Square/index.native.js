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
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
export var Square = memo(function (props) {
    return (React.createElement(Svg, __assign({ viewBox: '0 0 50 50' }, props),
        React.createElement(Path, { d: 'M44 1H6C3.243 1 1 3.243 1 6v38c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5zm3 43c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h38c1.654 0 3 1.346 3 3v38z' })));
});
//# sourceMappingURL=index.native.js.map