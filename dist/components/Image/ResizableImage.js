var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
function extractResizeModeProps(_a) {
    var source = _a.source, _b = _a.resizeMode, resizeMode = _b === void 0 ? 'cover' : _b, backgroundSize = _a.backgroundSize;
    return "\n    height: 100%;\n    width: 100%;\n    background-image: url(" + source + ");\n    background-position: " + (resizeMode == 'repeat' ? '0% 0%' : 'center') + ";\n    background-repeat: " + (resizeMode == 'repeat' ? 'repeat' : 'no-repeat') + ";\n    background-size: " + (resizeMode == 'center' || resizeMode === 'repeat'
        ? 'auto'
        : resizeMode === 'contain'
            ? 'contain'
            : resizeMode === 'stretch'
                ? '100% 100%'
                : 'cover') + ";\n    " + (backgroundSize != null ? "background-size: " + backgroundSize : '') + ";\n    ";
}
export var ResizableImage = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), extractResizeModeProps);
var templateObject_1;
//# sourceMappingURL=ResizableImage.js.map