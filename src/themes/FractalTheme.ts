interface TextStyle {
    fontSize: number;
    fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold';
    color: string;
    fontFamily: string;
}

export interface FractalTheme {
    colors: {
        background: string;
        foreground: string;
        // Main Colors
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        // Alternative Colors
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        // Success Colors
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        // Warning
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
        // Danger,
        dangerInteractiveColor100: string;
        dangerInteractiveColor200: string;
        dangerInteractiveColor300: string;
        dangerInteractiveColor400: string;
        dangerInteractiveColor: string;
        dangerInteractiveColor600: string;
        dangerInteractiveColor700: string;
        dangerInteractiveColor800: string;
        dangerInteractiveColor900: string;
    };
    borderRadius: {
        m: number;
    };
    padding: {
        m: number;
    };
    margin: {
        m: number;
    };
    sizes: {
        buttonHeight: number;
    };
    shadowProperties: {
        boxShadow: string;
        navigationBarShadow: string;
    };
    textStyles: {
        normal: TextStyle;
        button: TextStyle;
    };
}
