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
export var ChevronDown = memo(function (props) {
    return (React.createElement(Svg, __assign({ focusable: false, viewBox: '0 0 30 30', width: 30, height: 30 }, props),
        React.createElement(Path, { d: 'M3 12v-2a1.002 1.002 0 011.634-.774L15 17.708l10.367-8.482A1.001 1.001 0 0127 10v2a1 1 0 01-.367.774l-11 9a1.002 1.002 0 01-1.267 0l-11-9A1.003 1.003 0 013 12z' })));
});
//# sourceMappingURL=index.native.js.map