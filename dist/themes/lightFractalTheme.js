import { blue, green, orange, red, white, yellow } from '../palette';
import { createTheme } from '@shopify/restyle';
export var lightFractalTheme = createTheme({
    colors: {
        // Basic Colors
        textColor: white.base900,
        placeholderColor: white.base300,
        labelColor: white.base200,
        background: white.base400,
        foreground: white.base,
        separatorColor: white.base400,
        cellColor: white.base,
        textFieldColor: white.base400,
        shadowColor: 'black',
        // Base Colors
        transparent: 'transparent',
        black: 'black',
        white: 'white',
        facebook: '#3975EA',
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
    spacing: {
        xs: 8,
        s: 12,
        m: 16,
        l: 24,
        xl: 40,
        cell: 16,
        paddedContainer: 16
    },
    breakpoints: {},
    borderRadii: {
        xs: 0,
        s: 8,
        m: 12,
        l: 16,
        xl: 20,
        cellRadius: 12,
        buttonRadius: 12,
        textFieldRadius: 12
    },
    interactiveItems: {
        buttonHeight: 44,
        textFieldHeight: 44
    },
    textFields: {
        iconSize: 16
    },
    shadowProperties: {
        offset: { height: 2, width: 2 },
        radius: 8,
        opacity: 0.08
    },
    textVariants: {
        defaults: {
            fontSize: 17,
            color: 'textColor'
        },
        title: {
            fontSize: 27,
            fontWeight: '700'
        },
        subtitle: {
            fontSize: 21,
            fontWeight: '600'
        },
        regular: {},
        smallText: {
            fontSize: 15
        },
        label: {
            color: 'labelColor',
            fontSize: 15
        },
        placeholder: {
            color: 'placeholderColor',
            fontSize: 15
        },
        // Interactive Text or Text with Color
        mainInteractiveColor: {
            color: 'mainInteractiveColor'
        },
        alternativeInteractiveColor: {
            color: 'alternativeInteractiveColor'
        },
        successInteractiveColor: {
            color: 'successInteractiveColor'
        },
        warningInteractiveColor: {
            color: 'warningInteractiveColor'
        },
        dangerInteractiveColor: {
            color: 'dangerInteractiveColor'
        },
        // Interactive Titles or Titles with Color
        mainInteractiveTitle: {
            color: 'mainInteractiveColor',
            fontSize: 27,
            fontWeight: '700'
        },
        alternativeInteractiveTitle: {
            color: 'alternativeInteractiveColor',
            fontSize: 27,
            fontWeight: '700'
        },
        successInteractiveColorTitle: {
            color: 'successInteractiveColor',
            fontSize: 27,
            fontWeight: '700'
        },
        warningInteractiveColorTitle: {
            color: 'warningInteractiveColor',
            fontSize: 27,
            fontWeight: '700'
        },
        dangerInteractiveColorTitle: {
            color: 'dangerInteractiveColor',
            fontSize: 27,
            fontWeight: '700'
        }
    }
});
//# sourceMappingURL=lightFractalTheme.js.map