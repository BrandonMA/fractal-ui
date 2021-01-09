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
import React, { useEffect, useRef, useState } from 'react';
import { BaseBox } from './baseComponents/BaseBox';
import { Animated } from 'react-native';
import { useShowAnimation } from '../animationHooks/useShowAnimation';
import { useHideAnimation } from '../animationHooks/useHideAnimation';
// Not ready, implementation is not final
export function PopoverView(props) {
    var active = props.active, popoverChildren = props.popoverChildren, popoverContainerProps = props.popoverContainerProps, others = __rest(props, ["active", "popoverChildren", "popoverContainerProps"]);
    var _a = useState({ x: 0, y: 0, height: 0, width: 0 }), mainViewLayout = _a[0], setMainViewLayout = _a[1];
    var yValueWithOffset = mainViewLayout.y + mainViewLayout.height + 16;
    var animatedValue = useRef(new Animated.Value(0)).current;
    var showAnimation = useShowAnimation(animatedValue);
    var hideAnimation = useHideAnimation(animatedValue);
    useEffect(function () {
        if (active) {
            showAnimation();
        }
        else {
            hideAnimation();
        }
    }, [active, showAnimation, hideAnimation]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseBox, __assign({}, others, { onLayout: function (nativeElement) {
                setMainViewLayout(nativeElement.nativeEvent.layout);
            } })),
        React.createElement(BaseBox, __assign({ position: 'absolute', style: {
                opacity: animatedValue,
                transform: [{ scale: animatedValue }],
                left: mainViewLayout.x,
                top: yValueWithOffset,
                zIndex: 2000
            } }, popoverContainerProps), popoverChildren(mainViewLayout))));
}
//# sourceMappingURL=PopoverView.js.map