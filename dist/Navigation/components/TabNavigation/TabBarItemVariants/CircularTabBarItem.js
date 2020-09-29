var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components/native';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';
export var CircularTabBarItem = styled(SharedTabBarItemStyles)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 52px;\n    width: 52px;\n    border-radius: 26px;\n    position: absolute;\n    align-self: center;\n    background-color: ", ";\n    ", ";\n"], ["\n    height: 52px;\n    width: 52px;\n    border-radius: 26px;\n    position: absolute;\n    align-self: center;\n    background-color: ", ";\n    ", ";\n"])), function (props) { return props.bg; }, function (props) { return getAbsolutePosition(props.position, 22); });
var templateObject_1;
//# sourceMappingURL=CircularTabBarItem.js.map