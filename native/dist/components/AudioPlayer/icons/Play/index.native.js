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
export var PlayIcon = memo(function (props) {
    return (React.createElement(Svg, __assign({ focusable: false, width: 20, height: 22, viewBox: '0 0 20 22' }, props),
        React.createElement(Path, { d: 'M1.673.2a.887.887 0 00-.873.9v19.8c0 .497.39.9.873.9.181 0 .358-.06.506-.169l.002.002 17.31-9.816A.902.902 0 0020 11a.901.901 0 00-.534-.83L2.181.367h-.002A.855.855 0 001.673.2z', fillRule: 'nonzero' })));
});
//# sourceMappingURL=index.native.js.map