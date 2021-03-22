import { black } from '../../colors';
import { createFractalTheme } from './createFractalTheme';

export const darkColors = {
    background: black.base400,
    foreground: black.base,
    text: black.base900,
    textField: black.base400,
    placeholder: black.base300,
    label: black.base200,
    separator: black.base400
};

export const darkFractalTheme = createFractalTheme({
    colors: {
        ...darkColors
    }
});
