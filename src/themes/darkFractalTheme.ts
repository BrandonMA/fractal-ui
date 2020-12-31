import { createFractalTheme } from './createFractalTheme';
import { black } from '../palette';

export const darkFractalTheme = createFractalTheme({
    colors: {
        textColor: black.base900,
        placeholderColor: black.base300,
        labelColor: black.base200,
        background: black.base400,
        foreground: black.base
    }
});
