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
import React, { Children, useEffect, useMemo, useRef } from 'react';
import { useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import styled from 'styled-components/native';
import { ScreenStack } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { injectModalContainers } from './util/injectModalContainer';
import { getInsetsStyle } from '../../../../Layout/util/getInsetsStyle';
import { useTabBarInsets } from '../../../hooks';
var StyledScreenStack = styled(ScreenStack)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n    ", "\n"], ["\n    flex: 1;\n    ", "\n"])), getInsetsStyle);
var insetsStyleConfig = { type: 'margin', removeVertical: true };
export function StackNavigator(props) {
    var path = props.path, children = props.children, others = __rest(props, ["path", "children"]);
    var pathname = useLocation().pathname;
    var active = useMatch(path !== null && path !== void 0 ? path : '/')[0];
    var prevChildrenRef = useRef([]);
    var tabBarInsets = useTabBarInsets();
    var childrenToRender = useMemo(function () {
        var arrayOfChildren = Children.toArray(children);
        arrayOfChildren = filterMatchingChildren(arrayOfChildren, pathname);
        arrayOfChildren = injectModalContainers(arrayOfChildren);
        return arrayOfChildren;
    }, [children, pathname]);
    useEffect(function () {
        if (active) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, active]);
    return (React.createElement(StyledScreenStack, __assign({}, others, { insets: tabBarInsets, insetsStyleConfig: insetsStyleConfig }), active ? childrenToRender : prevChildrenRef.current));
}
var templateObject_1;
//# sourceMappingURL=StackNavigator.js.map