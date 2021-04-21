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
export var PauseIcon = memo(function (props) {
    return (React.createElement(Svg, __assign({ focusable: false, width: 18, height: 22, viewBox: '0 0 18 22' }, props),
        React.createElement(Path, { d: 'M2 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2h-2z', fillRule: 'nonzero' })));
});
//# sourceMappingURL=index.native.js.map