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
import React, { memo } from 'react';
import { useMatch } from '../../../hooks/useMatch';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import styled from 'styled-components/native';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { Spacer } from '../../../../Layout/components/Spacer';
import { constants } from '../../../constants';
import { useGoToTab } from './hooks/useGoToTab';
import { useTabBarItemColor } from './hooks/useTabBarItemColor';
import { useThemeColor } from '../../../../ThemeState';
import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../../../recoil/atoms/tabBarPositionAtom';
var StyledText = memo(styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 11px;\n"], ["\n    color: ", ";\n    font-size: 11px;\n"])), function (props) { return props.color; }));
export var TabBarItem = memo(function (props) {
    var path = props.path, variant = props.variant, title = props.title, children = props.children, others = __rest(props, ["path", "variant", "title", "children"]);
    var active = useMatch(path)[0];
    var color = useTabBarItemColor(active, props);
    var TabBarItemContainer = getTabBarItemComponent(variant);
    var iconSize = getTabIconSize(variant);
    var widthSizeGroup = useWidthSizeGroup();
    var tabBarPosition = useRecoilValue(tabBarPositionAtom);
    var spacerSize = tabBarPosition !== 'bottom'
        ? constants.tabBarItemCompactSpacerSize
        : getValueForLargeSize(widthSizeGroup[0], constants.tabBarItemLargeSpacerSize, constants.tabBarItemCompactSpacerSize);
    var goToTab = useGoToTab(path, active);
    var tabBarItemColor = useThemeColor('mainInteractiveColor');
    return (React.createElement(TabBarItemContainer, __assign({}, others, { onPress: goToTab, bg: tabBarItemColor.base, widthSizeGroup: widthSizeGroup, highlightColor: tabBarItemColor.base600 }),
        children(color, iconSize),
        React.createElement(Spacer, { width: spacerSize.width, height: spacerSize.height }),
        variant === 'circular' && title != null ? null : React.createElement(StyledText, { color: color }, title)));
});
var templateObject_1;
//# sourceMappingURL=TabBarItem.js.map