import { createFractalTheme } from './createFractalTheme';
import { black } from '../palette';

export const darkFractalTheme = createFractalTheme({
    colors: {
        textColor: black.base900,
        placeholderColor: black.base300,
        labelColor: black.base200,
        background: black.base,
        foreground: black.base,
        separatorColor: black.base400,
        textFieldColor: black.base400,
        cellColor: black.base400
    },
    shadowProperties: {
        opacity: 0.3
    }
});
