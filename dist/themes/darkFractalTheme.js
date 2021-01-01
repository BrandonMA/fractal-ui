import { createFractalTheme } from './createFractalTheme';
import { black } from '../palette';
export var darkFractalTheme = createFractalTheme({
    colors: {
        textColor: black.base900,
        placeholderColor: black.base300,
        labelColor: black.base200,
        background: black.base,
        foreground: black.base400,
        separatorColor: black.base,
        textFieldColor: black.base,
        cellColor: black.base400
    },
    shadowProperties: {
        opacity: 0.3
    }
});
//# sourceMappingURL=darkFractalTheme.js.map