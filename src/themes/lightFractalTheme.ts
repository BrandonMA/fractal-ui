import { blue, orange, green, yellow, red, white } from '../colors';
import { FractalTheme } from './FractalTheme';

export const lightFractalTheme: FractalTheme = {
    colors: {
        background: white.base400,
        foreground: white.base,
        // Main Colors
        mainInteractiveColor100: blue.base100,
        mainInteractiveColor200: blue.base200,
        mainInteractiveColor300: blue.base300,
        mainInteractiveColor400: blue.base400,
        mainInteractiveColor: blue.base,
        mainInteractiveColor600: blue.base600,
        mainInteractiveColor700: blue.base700,
        mainInteractiveColor800: blue.base800,
        mainInteractiveColor900: blue.base900,
        // Alternative Colors
        alternativeInteractiveColor100: orange.base100,
        alternativeInteractiveColor200: orange.base200,
        alternativeInteractiveColor300: orange.base300,
        alternativeInteractiveColor400: orange.base400,
        alternativeInteractiveColor: orange.base,
        alternativeInteractiveColor600: orange.base600,
        alternativeInteractiveColor700: orange.base700,
        alternativeInteractiveColor800: orange.base800,
        alternativeInteractiveColor900: orange.base900,
        // Success Colors
        successInteractiveColor100: green.base100,
        successInteractiveColor200: green.base200,
        successInteractiveColor300: green.base300,
        successInteractiveColor400: green.base400,
        successInteractiveColor: green.base,
        successInteractiveColor600: green.base600,
        successInteractiveColor700: green.base700,
        successInteractiveColor800: green.base800,
        successInteractiveColor900: green.base900,
        // Warning
        warningInteractiveColor100: yellow.base100,
        warningInteractiveColor200: yellow.base200,
        warningInteractiveColor300: yellow.base300,
        warningInteractiveColor400: yellow.base400,
        warningInteractiveColor: yellow.base,
        warningInteractiveColor600: yellow.base600,
        warningInteractiveColor700: yellow.base700,
        warningInteractiveColor800: yellow.base800,
        warningInteractiveColor900: yellow.base900,
        // Danger,
        dangerInteractiveColor100: red.base100,
        dangerInteractiveColor200: red.base200,
        dangerInteractiveColor300: red.base300,
        dangerInteractiveColor400: red.base400,
        dangerInteractiveColor: red.base,
        dangerInteractiveColor600: red.base600,
        dangerInteractiveColor700: red.base700,
        dangerInteractiveColor800: red.base800,
        dangerInteractiveColor900: red.base900
    },
    borderRadius: {
        m: 12
    },
    padding: {
        m: 16
    },
    margin: {
        m: 16
    },
    sizes: {
        buttonHeight: 44
    },
    shadowProperties: {
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.08)',
        navigationBarShadow: '2px 2px 8px rgba(0, 0, 0, 0.08)'
    },
    textStyles: {
        normal: {
            fontSize: 17,
            fontWeight: 500,
            color: white.base
        },
        button: {
            fontSize: 17,
            fontWeight: 'bold',
            color: white.base
        }
    }
};
