import { createFractalTheme } from './createFractalTheme';
import { black } from '../palette';

export const darkFractalTheme = createFractalTheme({
    colors: {
        // Basic Colors
        textColor: black.base900,
        placeholderColor: black.base300,
        labelColor: black.base200,
        background: black.base400,
        foreground: black.base,
        separatorColor: black.base400,
        textFieldColor: black.base400,
        cellColor: black.base,
        // Navigation
        navigationBarBackground: black.base,
        navigationBarTitleColor: black.base900,
        tabBarBackground: black.base,
        tabBarItemInactive: black.base200
    },
    shadowProperties: {
        opacity: 0.2
    }
});
