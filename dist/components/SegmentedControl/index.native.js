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
const SegmentsContainer = styled.View `
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    z-index: 99;
    elevation: 2;
`;
const Slider = styled(Animated.View) `
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    left: 2px;
    elevation: 1;
    ${extractShadowProps};
    ${extractBorderProps};
`;
export const SegmentedControl = forwardRef((_a, ref) => {
    var { onChange, onValueChange, selectedIndex = 0, values, tintColor, backgroundColor, textStyle, activeTextStyle } = _a, layerProps = __rest(_a, ["onChange", "onValueChange", "selectedIndex", "values", "tintColor", "backgroundColor", "textStyle", "activeTextStyle"]);
    const { colors, shadows, borderRadius, sizes } = useTheme();
    const [segmentWidth, setSegmentWidth] = React.useState(0);
    const animation = React.useRef(new Animated.Value(0)).current;
    const handleChange = (index) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(values[index], index);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(values[index]);
    };
    useEffect(() => {
        if (animation && segmentWidth) {
            Animated.timing(animation, {
                toValue: segmentWidth * selectedIndex,
                duration: 300,
                easing: Easing.out(Easing.quad),
                useNativeDriver: true
            }).start();
        }
    }, [animation, segmentWidth, selectedIndex]);
    return (React.createElement(Layer, Object.assign({ ref: ref, overflow: 'hidden', position: 'relative', height: sizes.segmentedControlSize, backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.background, borderRadius: borderRadius.s, onLayout: ({ nativeEvent: { layout: { width } } }) => {
            const newSegmentWidth = values.length ? width / values.length : 0;
            if (newSegmentWidth !== segmentWidth) {
                animation.setValue(newSegmentWidth * (selectedIndex || 0));
                setSegmentWidth(newSegmentWidth);
            }
        } }, layerProps),
        !backgroundColor && !tintColor && React.createElement(SegmentsSeparators, { values: values.length, selectedIndex: selectedIndex }),
        React.createElement(SegmentsContainer, null, values &&
            values.map((value, index) => {
                return (React.createElement(SegmentedControlTab, { selected: selectedIndex === index, key: index, value: value, tintColor: tintColor, textStyle: textStyle, activeTextStyle: activeTextStyle, onSelect: () => {
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
//# sourceMappingURL=index.native.js.map