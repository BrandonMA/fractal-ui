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
export var FacebookIcon = memo(function (props) {
    return (React.createElement(Svg, __assign({ focusable: false, viewBox: '0 0 30 30', width: 30, height: 30 }, props),
        React.createElement(Path, { d: 'M12 27V15H8v-4h4V8.852C12 4.785 13.981 3 17.361 3c1.619 0 2.475.12 2.88.175V7h-2.305C16.501 7 16 7.757 16 9.291V11h4.205l-.571 4H16v12h-4z' })));
});
//# sourceMappingURL=index.native.js.map