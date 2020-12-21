var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useShowAnimation } from '../../../Animations/hooks';
import { useWidthSizeGroup } from '../../../SizeGroup/hooks';
import { useHistory } from '../../../ReactRouter';
import { getValueForLargeSize } from '../../../SizeGroup/util';
import { constants } from '../../constants';
import { useThemeColor } from '../../../ThemeState';
var StyledContainer = styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    justify-content: ", ";\n    align-items: center;\n"], ["\n    justify-content: ", ";\n    align-items: center;\n"])), function (props) { return getValueForLargeSize(props.size, 'center', 'flext-start'); });
var Background = styled(Pressable)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    opacity: 0.6;\n    margin: -100px;\n"], ["\n    background-color: ", ";\n    opacity: 0.6;\n    margin: -100px;\n"])), function (props) { return props.color; });
var SharedStyles = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: ", "\n    overflow: hidden;\n    border-radius: 20px;\n"], ["\n    box-shadow: ", "\n    overflow: hidden;\n    border-radius: 20px;\n"])), function (props) { return props.shadow; });
var WhiteContentDesktop = styled(SharedStyles)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 60%;\n    height: 60%;\n    max-width: 550px;\n    max-height: 550px;\n"], ["\n    width: 60%;\n    height: 60%;\n    max-width: 550px;\n    max-height: 550px;\n"])));
var WhiteContentPhone = styled(SharedStyles)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 90%;\n    height: 85%;\n    margin-top: ", "px;\n"], ["\n    width: 90%;\n    height: 85%;\n    margin-top: ", "px;\n"])), constants.basePaddingSize);
export function StackScreenModal(props) {
    var opacityValue = useRef(new Animated.Value(0)).current;
    var goBack = useHistory().goBack;
    var show = useShowAnimation(opacityValue);
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, WhiteContentDesktop, WhiteContentPhone);
    var containerColor = useThemeColor('containerColor');
    useEffect(function () {
        show();
    }, [show]);
    return (React.createElement(StyledContainer, { size: widthSize, style: [StyleSheet.absoluteFill, { opacity: opacityValue }] },
        React.createElement(Background, { color: containerColor.base600, onPress: goBack, style: [StyleSheet.absoluteFill] }),
        React.createElement(Wrapper, { shadow: containerColor.shadow }, props.children)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=StackScreenModal.js.map