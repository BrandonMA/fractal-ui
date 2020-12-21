var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components/native';
import { memo } from 'react';
import { Animated } from 'react-native';
export var Spacer = memo(styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n"], ["\n    width: ", "px;\n    height: ", "px;\n"])), function (props) { return props.width; }, function (props) { return props.height; }));
var templateObject_1;
//# sourceMappingURL=Spacer.js.map