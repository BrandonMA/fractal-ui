var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useHistory } from '../../../../ReactRouter';
import { Feather } from '@expo/vector-icons';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useMatch } from '../../../hooks/useMatch';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { useThemeColor } from '../../../../ThemeState';
import { usePathIsActive } from '../../../hooks/usePathIsActive';
var Container = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex-direction: row;\n    height: ", "px;\n    background-color: ", ";\n    box-shadow: ", ";\n    width: 100%;\n    z-index: 1000;\n    padding: 0 16px;\n"], ["\n    flex-direction: row;\n    height: ", "px;\n    background-color: ", ";\n    box-shadow: ", ";\n    width: 100%;\n    z-index: 1000;\n    padding: 0 16px;\n"])), 50, function (props) { return props.backgroundColor.base; }, function (props) { return props.backgroundColor.shadow; });
var StyledText = styled.Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: ", "px;\n"], ["\n    color: ", ";\n    font-size: ", "px;\n"])), function (props) { return props.color; }, function (props) { var _a; return (_a = props.fontSize) !== null && _a !== void 0 ? _a : 17; });
var StyledTitle = memo(styled.Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    font-weight: 600;\n    font-size: ", "px;\n    text-align: center;\n"], ["\n    color: ", ";\n    font-weight: 600;\n    font-size: ", "px;\n    text-align: center;\n"])), function (props) { return props.color; }, function (props) { var _a; return (_a = props.fontSize) !== null && _a !== void 0 ? _a : 17; }));
var SharedStylesSectionContainer = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    flex-basis: 0;\n"], ["\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    flex-basis: 0;\n"])));
var LeftContainer = styled(SharedStylesSectionContainer)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    justify-content: flex-start;\n"], ["\n    justify-content: flex-start;\n"])));
var MiddleContainer = styled(SharedStylesSectionContainer)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    justify-content: center;\n"], ["\n    justify-content: center;\n"])));
var RightContainer = styled(SharedStylesSectionContainer)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    justify-content: flex-end;\n"], ["\n    justify-content: flex-end;\n"])));
var StyledBackButtonContainer = styled.TouchableOpacity(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    margin-left: -8px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    ", ";\n"], ["\n    margin-left: -8px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    ", ";\n"])), getCursorStyle);
function BackButton(props) {
    var backTitleFontSize = props.backTitleFontSize, backTitle = props.backTitle;
    var goBack = useHistory().goBack;
    var mainInteractiveColor = useThemeColor('mainInteractiveColor');
    return (React.createElement(StyledBackButtonContainer, { onPress: goBack },
        React.createElement(Feather, { name: 'chevron-left', size: 28, color: mainInteractiveColor.base }),
        React.createElement(StyledText, { selectable: false, color: mainInteractiveColor.base, fontSize: backTitleFontSize }, backTitle)));
}
export function NavigationBar(props) {
    var hidden = props.hidden, title = props.title, hideBackButton = props.hideBackButton, backTitle = props.backTitle, path = props.path, backTitleFontSize = props.backTitleFontSize, titleFontSize = props.titleFontSize, children = props.children;
    var navigationBarColor = useThemeColor('navigationBarColor');
    var textColor = useThemeColor('textColor');
    var isPathActive = usePathIsActive(path);
    var _a = useMatch('/'), activeRoutes = _a[1];
    var _b = useNavigationBarChildren(children), leftChild = _b[0], centerChild = _b[1], rightChild = _b[2];
    return hidden ? null : (React.createElement(Container, { backgroundColor: navigationBarColor },
        React.createElement(LeftContainer, null,
            activeRoutes > 1 && isPathActive && !hideBackButton ? (React.createElement(BackButton, { backTitle: backTitle, backTitleFontSize: backTitleFontSize })) : null,
            leftChild),
        React.createElement(MiddleContainer, null, centerChild !== null && centerChild !== void 0 ? centerChild : (React.createElement(StyledTitle, { color: textColor.base900, fontSize: titleFontSize, selectable: false }, title))),
        React.createElement(RightContainer, null, rightChild)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=NavigationBar.js.map