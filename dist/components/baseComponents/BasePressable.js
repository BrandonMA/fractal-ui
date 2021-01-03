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
import React from 'react';
import { Animated, Pressable } from 'react-native';
import { useCursorStyles } from './hooks/useCursorStyles';
var AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export function BasePressable(props) {
    var restyleProps = useCursorStyles(props);
    return React.createElement(AnimatedPressable, __assign({}, restyleProps));
}
//# sourceMappingURL=BasePressable.js.map