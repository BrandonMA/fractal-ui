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
import { black } from '../colors';
import { createFractalTheme } from './createFractalTheme';
export var darkColors = {
    background: black.base400,
    foreground: black.base,
    text: black.base900,
    textField: black.base400,
    placeholder: black.base300,
    label: black.base200,
    separator: black.base400
};
export var darkFractalTheme = createFractalTheme({
    colors: __assign({}, darkColors)
});
//# sourceMappingURL=darkFractalTheme.js.map