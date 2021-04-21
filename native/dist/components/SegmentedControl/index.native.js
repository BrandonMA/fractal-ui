var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React, { useEffect, forwardRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';
import { SegmentedControlTab } from './SegmentControlTap';
import { SegmentsSeparators } from './SegmentsSeparators';
import { Layer } from '../containers/Layer';
import { useTheme } from '../../core/context/hooks/useTheme';
import { extractBorderProps, extractShadowProps } from '../../sharedProps';
var SegmentsContainer = styled.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: transparent;\n    z-index: 99;\n    elevation: 2;\n"], ["\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: transparent;\n    z-index: 99;\n    elevation: 2;\n"])));
var Slider = styled(Animated.View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 2px;\n    bottom: 2px;\n    right: 2px;\n    left: 2px;\n    elevation: 1;\n    ", ";\n    ", ";\n"], ["\n    position: absolute;\n    top: 2px;\n    bottom: 2px;\n    right: 2px;\n    left: 2px;\n    elevation: 1;\n    ", ";\n    ", ";\n"])), extractShadowProps, extractBorderProps);
export var SegmentedControl = forwardRef(function (_a, ref) {
    var onChange = _a.onChange, onValueChange = _a.onValueChange, _b = _a.selectedIndex, selectedIndex = _b === void 0 ? 0 : _b, values = _a.values, tintColor = _a.tintColor, backgroundColor = _a.backgroundColor, textStyle = _a.textStyle, activeTextStyle = _a.activeTextStyle, layerProps = __rest(_a, ["onChange", "onValueChange", "selectedIndex", "values", "tintColor", "backgroundColor", "textStyle", "activeTextStyle"]);
    var _c = useTheme(), colors = _c.colors, shadows = _c.shadows, borderRadius = _c.borderRadius, sizes = _c.sizes;
    var _d = React.useState(0), segmentWidth = _d[0], setSegmentWidth = _d[1];
    var animation = React.useRef(new Animated.Value(0)).current;
    var handleChange = function (index) {
        onChange === null || onChange === void 0 ? void 0 : onChange(values[index], index);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(values[index]);
    };
    useEffect(function () {
        if (animation && segmentWidth) {
            Animated.timing(animation, {
                toValue: segmentWidth * selectedIndex,
                duration: 300,
                easing: Easing.out(Easing.quad),
                useNativeDriver: true
            }).start();
        }
    }, [animation, segmentWidth, selectedIndex]);
    return (React.createElement(Layer, __assign({ ref: ref, overflow: 'hidden', position: 'relative', height: sizes.segmentedControlSize, backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.background, borderRadius: borderRadius.s, onLayout: function (_a) {
            var width = _a.nativeEvent.layout.width;
            var newSegmentWidth = values.length ? width / values.length : 0;
            if (newSegmentWidth !== segmentWidth) {
                animation.setValue(newSegmentWidth * (selectedIndex || 0));
                setSegmentWidth(newSegmentWidth);
            }
        } }, layerProps),
        !backgroundColor && !tintColor && React.createElement(SegmentsSeparators, { values: values.length, selectedIndex: selectedIndex }),
        React.createElement(SegmentsContainer, null, values &&
            values.map(function (value, index) {
                return (React.createElement(SegmentedControlTab, { selected: selectedIndex === index, key: index, value: value, tintColor: tintColor, textStyle: textStyle, activeTextStyle: activeTextStyle, onSelect: function () {
                        handleChange(index);
                    } }));
            })),
        selectedIndex != null && segmentWidth ? (React.createElement(Slider, { boxShadow: shadows.mainShadow, borderRadius: borderRadius.s, style: [
                {
                    transform: [{ translateX: animation }],
                    width: segmentWidth - 4,
                    backgroundColor: tintColor || colors.foreground
                }
            ] })) : null));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.native.js.map