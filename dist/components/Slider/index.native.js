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
import { Platform } from 'react-native';
import NativeSlider from '@react-native-community/slider';
import { useTheme } from '../../hooks';
export function Slider(props) {
    var colors = useTheme().colors;
    return (React.createElement(NativeSlider, __assign({ minimumTrackTintColor: colors.mainInteractiveColor, thumbTintColor: Platform.OS == 'android' ? colors.mainInteractiveColor : colors.white }, props)));
}
//# sourceMappingURL=index.native.js.map