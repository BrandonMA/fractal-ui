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
import Svg, { Path } from 'react-native-svg';
var LeftShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 61, height: 75, viewBox: '0 0 61 75' }, props),
        React.createElement(Path, { d: 'M61 75.2H0V0h61c0 4.1-3.1 7.4-7.1 7.9C39.3 10 28 22.5 28 37.7c0 15.2 11.3 27.7 25.9 29.7 4 .5 7.1 3.9 7.1 7.9v-.1z' })));
});
var BottomShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 75, height: 61, viewBox: '0 0 75 61' }, props),
        React.createElement(Path, { d: 'M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z' })));
});
var RightShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 61, height: 75, viewBox: '0 0 61 75' }, props),
        React.createElement(Path, { d: 'M0 .1h61v75.2H0c0-4.1 3.1-7.4 7.1-7.9C21.7 65.3 33 52.8 33 37.6 33 22.4 21.7 9.9 7.1 7.9 3.1 7.4 0 4 0 0v.1z' })));
});
export var MiddleTabBarShape = memo(function (props) {
    var tabBarPosition = props.tabBarPosition, others = __rest(props, ["tabBarPosition"]);
    switch (tabBarPosition) {
        case 'right':
            return React.createElement(RightShape, __assign({}, others));
        case 'left':
            return React.createElement(LeftShape, __assign({}, others));
        case 'bottom':
            return React.createElement(BottomShape, __assign({}, others));
    }
});
//# sourceMappingURL=MiddleTabBarShape.js.map