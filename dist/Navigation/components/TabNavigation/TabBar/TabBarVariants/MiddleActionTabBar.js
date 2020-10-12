var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getTabBarAbsolutePosition } from '../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../util/getValueBasedOnTabBarPosition';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { applyTabBarInsets } from '../util/applyTabBarInsets';
import { applyDimensionBasedOnTabBarPosition } from '../util/applyDimensionBasedOnTabBarPosition';
import { getImageBasedOnPosition } from '../assets/getImageBasedOnPosition';
var Container = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    ", ";\n    ", ";\n"], ["\n    position: absolute;\n    ", ";\n    ", ";\n"])), function (props) { return getTabBarAbsolutePosition(props.tabBarPosition, 0); }, applyDimensionBasedOnTabBarPosition);
var ItemsContainer = styled(View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex-direction: ", ";\n    ", ";\n"], ["\n    flex-direction: ", ";\n    ", ";\n"])), function (props) { return getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition); }, applyDimensionBasedOnTabBarPosition);
var SideView = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);\n    background-color: white;\n    flex-grow: 1;\n    flex-direction: ", ";\n    flex-basis: 0;\n    ", ";\n"], ["\n    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);\n    background-color: white;\n    flex-grow: 1;\n    flex-direction: ", ";\n    flex-basis: 0;\n    ", ";\n"])), function (props) { return getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition); }, applyTabBarInsets);
// Middle button styles
var MiddleContainer = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: absolute;\n    ", ";\n    ", ";\n    ", ";\n    z-index: 1000;\n    flex-direction: ", ";\n"], ["\n    position: absolute;\n    ", ";\n    ", ";\n    ", ";\n    z-index: 1000;\n    flex-direction: ", ";\n"])), function (props) { return getTabBarAbsolutePosition(props.tabBarPosition, 0); }, applyTabBarInsets, applyDimensionBasedOnTabBarPosition, function (props) { return getValueBasedOnTabBarPosition('column', 'row', props.tabBarPosition); });
var MiddleActionImageContainer = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    z-index: 1000;\n"], ["\n    z-index: 1000;\n"])));
var MiddleActionImageContainerFiller = styled.View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex-grow: 1;\n    background-color: white;\n"], ["\n    flex-grow: 1;\n    background-color: white;\n"])));
var MiddleActionImage = styled.Image(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n"], ["\n    width: ", ";\n    height: ", ";\n"])), function (props) { return getValueBasedOnTabBarPosition('88px', '60px', props.tabBarPosition); }, function (props) { return getValueBasedOnTabBarPosition('60px', '88px', props.tabBarPosition); });
function BaseMiddleActionTabBar(props) {
    var children = props.children, others = __rest(props, ["children"]);
    var insets = useSafeAreaInsets();
    var _a = useMemo(function () {
        var allChildren = React.Children.toArray(children);
        var leftChildren = [];
        var rightChildren = [];
        var middleChild = null;
        if (allChildren.length === 1) {
            middleChild = allChildren[0];
        }
        else if (allChildren.length === 3) {
            leftChildren.push(allChildren[0]);
            middleChild = allChildren[1];
            rightChildren.push(allChildren[2]);
        }
        else if (allChildren.length === 5) {
            leftChildren.push(allChildren[0]);
            leftChildren.push(allChildren[1]);
            middleChild = allChildren[2];
            rightChildren.push(allChildren[3]);
            rightChildren.push(allChildren[4]);
        }
        else {
            throw Error('The amount of items in a MiddleActionTabBar must be 1, 3 or 5');
        }
        return [leftChildren, middleChild, rightChildren];
    }, [children]), leftChildren = _a[0], middleChild = _a[1], rightChildren = _a[2];
    return (<>
            <MiddleContainer tabBarPosition={props.tabBarPosition} insets={insets} pointerEvents='box-none'>
                {middleChild}
            </MiddleContainer>
            <Container {...others}>
                <ItemsContainer tabBarPosition={props.tabBarPosition}>
                    <SideView insets={insets} tabBarPosition={props.tabBarPosition}>
                        {leftChildren}
                    </SideView>
                    <MiddleActionImageContainer>
                        <MiddleActionImage tabBarPosition={props.tabBarPosition} source={getImageBasedOnPosition(props.tabBarPosition)}/>
                        <MiddleActionImageContainerFiller />
                    </MiddleActionImageContainer>
                    <SideView insets={insets} tabBarPosition={props.tabBarPosition}>
                        {rightChildren}
                    </SideView>
                </ItemsContainer>
            </Container>
        </>);
}
export var MiddleActionTabBar = React.memo(BaseMiddleActionTabBar);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=MiddleActionTabBar.js.map