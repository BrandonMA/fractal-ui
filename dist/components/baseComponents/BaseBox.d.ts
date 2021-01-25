import { BoxProps as NativeBoxProps } from '@shopify/restyle';
import { ComponentProps, ReactNode } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { Animated } from 'react-native';
export declare const BaseBox: Animated.AnimatedComponent<import("react").ForwardRefExoticComponent<import("@shopify/restyle").BackgroundColorProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & import("@shopify/restyle").OpacityProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & import("@shopify/restyle").VisibleProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & import("@shopify/restyle").LayoutProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & import("@shopify/restyle").SpacingProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & {
    borderBottomWidth?: number | {} | undefined;
    borderLeftWidth?: number | {} | undefined;
    borderRightWidth?: number | {} | undefined;
    borderStyle?: "solid" | "dotted" | "dashed" | {} | undefined;
    borderTopWidth?: number | {} | undefined;
    borderStartWidth?: string | number | {} | undefined;
    borderEndWidth?: string | number | {} | undefined;
    borderWidth?: number | {} | undefined;
} & {
    borderColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderTopColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderRightColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderLeftColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderBottomColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderStartColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    borderEndColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
} & {
    borderRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderBottomLeftRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderBottomRightRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderTopLeftRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderTopRightRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderBottomStartRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderBottomEndRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderTopStartRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    borderTopEndRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
} & {
    shadowOpacity?: number | {} | undefined;
    shadowOffset?: {
        width: number;
        height: number;
    } | {} | undefined;
    shadowRadius?: number | {} | undefined;
    elevation?: number | {} | undefined;
} & {
    shadowColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
} & {
    position?: "absolute" | "relative" | {} | undefined;
    top?: string | number | {} | undefined;
    right?: string | number | {} | undefined;
    bottom?: string | number | {} | undefined;
    left?: string | number | {} | undefined;
    start?: string | number | {} | undefined;
    end?: string | number | {} | undefined;
} & {
    zIndex?: number | {} | undefined;
} & import("@shopify/restyle").SpacingShorthandProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & import("@shopify/restyle").BackgroundColorShorthandProps<{
    colors: {
        textColor: string;
        placeholderColor: string;
        labelColor: string;
        background: string;
        foreground: string;
        separatorColor: string;
        cellColor: string;
        textFieldColor: string;
        shadowColor: string;
        navigationBarButtonColor: string;
        navigationBarBackground: string;
        navigationBarTitleColor: string;
        tabBarBackground: string;
        tabBarItemActive: string;
        tabBarItemInactive: string;
        transparent: string;
        black: string;
        white: string;
        facebook: string;
        mainInteractiveColor100: string;
        mainInteractiveColor200: string;
        mainInteractiveColor300: string;
        mainInteractiveColor400: string;
        mainInteractiveColor: string;
        mainInteractiveColor600: string;
        mainInteractiveColor700: string;
        mainInteractiveColor800: string;
        mainInteractiveColor900: string;
        alternativeInteractiveColor100: string;
        alternativeInteractiveColor200: string;
        alternativeInteractiveColor300: string;
        alternativeInteractiveColor400: string;
        alternativeInteractiveColor: string;
        alternativeInteractiveColor600: string;
        alternativeInteractiveColor700: string;
        alternativeInteractiveColor800: string;
        alternativeInteractiveColor900: string;
        successInteractiveColor100: string;
        successInteractiveColor200: string;
        successInteractiveColor300: string;
        successInteractiveColor400: string;
        successInteractiveColor: string;
        successInteractiveColor600: string;
        successInteractiveColor700: string;
        successInteractiveColor800: string;
        successInteractiveColor900: string;
        warningInteractiveColor100: string;
        warningInteractiveColor200: string;
        warningInteractiveColor300: string;
        warningInteractiveColor400: string;
        warningInteractiveColor: string;
        warningInteractiveColor600: string;
        warningInteractiveColor700: string;
        warningInteractiveColor800: string;
        warningInteractiveColor900: string;
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
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cell: number;
        paddedContainer: number;
    };
    breakpoints: {};
    borderRadii: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        cellRadius: number;
        buttonRadius: number;
        textFieldRadius: number;
    };
    interactiveItems: {
        buttonHeight: number;
        textFieldHeight: number;
    };
    textFields: {
        iconSize: number;
    };
    shadowProperties: {
        offset: {
            height: number;
            width: number;
        };
        radius: number;
        opacity: number;
        navigationBarOffset: {
            height: number;
            width: number;
        };
        navigationBarRadius: number;
        navigationBarOpacity: number;
    };
    textVariants: {
        defaults: {
            fontSize: number;
            color: string;
        };
        title: {
            fontSize: number;
            fontWeight: string;
        };
        subtitle: {
            fontSize: number;
            fontWeight: string;
        };
        regular: {};
        smallText: {
            fontSize: number;
        };
        label: {
            color: string;
            fontSize: number;
        };
        placeholder: {
            color: string;
            fontSize: number;
        };
        button: {
            color: string;
            fontWeight: string;
        };
        mainInteractiveColor: {
            color: string;
        };
        alternativeInteractiveColor: {
            color: string;
        };
        successInteractiveColor: {
            color: string;
        };
        warningInteractiveColor: {
            color: string;
        };
        dangerInteractiveColor: {
            color: string;
        };
        mainInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        alternativeInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        successInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        warningInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        dangerInteractiveTitle: {
            color: string;
            fontSize: number;
            fontWeight: string;
        };
        navigationBarButtonColor: {
            color: string;
        };
        navigationBarTitle: {
            fontSize: number;
            fontWeight: string;
            color: string;
        };
        tabBarItemActive: {
            fontSize: number;
            color: string;
        };
        tabBarItemInactive: {
            fontSize: number;
            color: string;
        };
    };
    navigationBar: {
        navigationBarHeight: number;
    };
}> & Pick<import("react-native").ViewProps & {
    children?: ReactNode;
}, "children" | "style" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & import("react").RefAttributes<unknown>> & {
    defaultProps?: Partial<import("@shopify/restyle").BackgroundColorProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & import("@shopify/restyle").OpacityProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & import("@shopify/restyle").VisibleProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & import("@shopify/restyle").LayoutProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & import("@shopify/restyle").SpacingProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & {
        borderBottomWidth?: number | {} | undefined;
        borderLeftWidth?: number | {} | undefined;
        borderRightWidth?: number | {} | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | {} | undefined;
        borderTopWidth?: number | {} | undefined;
        borderStartWidth?: string | number | {} | undefined;
        borderEndWidth?: string | number | {} | undefined;
        borderWidth?: number | {} | undefined;
    } & {
        borderColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderTopColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderRightColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderLeftColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderBottomColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderStartColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
        borderEndColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    } & {
        borderRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderBottomLeftRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderBottomRightRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderTopLeftRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderTopRightRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderBottomStartRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderBottomEndRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderTopStartRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
        borderTopEndRadius?: "s" | "m" | "xs" | "l" | "xl" | "cellRadius" | "buttonRadius" | "textFieldRadius" | {} | undefined;
    } & {
        shadowOpacity?: number | {} | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | {} | undefined;
        shadowRadius?: number | {} | undefined;
        elevation?: number | {} | undefined;
    } & {
        shadowColor?: "black" | "transparent" | "white" | "textColor" | "labelColor" | "placeholderColor" | "mainInteractiveColor" | "alternativeInteractiveColor" | "successInteractiveColor" | "warningInteractiveColor" | "dangerInteractiveColor" | "navigationBarButtonColor" | "navigationBarTitleColor" | "tabBarItemActive" | "tabBarItemInactive" | "background" | "foreground" | "separatorColor" | "cellColor" | "textFieldColor" | "shadowColor" | "navigationBarBackground" | "tabBarBackground" | "facebook" | "mainInteractiveColor100" | "mainInteractiveColor200" | "mainInteractiveColor300" | "mainInteractiveColor400" | "mainInteractiveColor600" | "mainInteractiveColor700" | "mainInteractiveColor800" | "mainInteractiveColor900" | "alternativeInteractiveColor100" | "alternativeInteractiveColor200" | "alternativeInteractiveColor300" | "alternativeInteractiveColor400" | "alternativeInteractiveColor600" | "alternativeInteractiveColor700" | "alternativeInteractiveColor800" | "alternativeInteractiveColor900" | "successInteractiveColor100" | "successInteractiveColor200" | "successInteractiveColor300" | "successInteractiveColor400" | "successInteractiveColor600" | "successInteractiveColor700" | "successInteractiveColor800" | "successInteractiveColor900" | "warningInteractiveColor100" | "warningInteractiveColor200" | "warningInteractiveColor300" | "warningInteractiveColor400" | "warningInteractiveColor600" | "warningInteractiveColor700" | "warningInteractiveColor800" | "warningInteractiveColor900" | "dangerInteractiveColor100" | "dangerInteractiveColor200" | "dangerInteractiveColor300" | "dangerInteractiveColor400" | "dangerInteractiveColor600" | "dangerInteractiveColor700" | "dangerInteractiveColor800" | "dangerInteractiveColor900" | {} | undefined;
    } & {
        position?: "absolute" | "relative" | {} | undefined;
        top?: string | number | {} | undefined;
        right?: string | number | {} | undefined;
        bottom?: string | number | {} | undefined;
        left?: string | number | {} | undefined;
        start?: string | number | {} | undefined;
        end?: string | number | {} | undefined;
    } & {
        zIndex?: number | {} | undefined;
    } & import("@shopify/restyle").SpacingShorthandProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & import("@shopify/restyle").BackgroundColorShorthandProps<{
        colors: {
            textColor: string;
            placeholderColor: string;
            labelColor: string;
            background: string;
            foreground: string;
            separatorColor: string;
            cellColor: string;
            textFieldColor: string;
            shadowColor: string;
            navigationBarButtonColor: string;
            navigationBarBackground: string;
            navigationBarTitleColor: string;
            tabBarBackground: string;
            tabBarItemActive: string;
            tabBarItemInactive: string;
            transparent: string;
            black: string;
            white: string;
            facebook: string;
            mainInteractiveColor100: string;
            mainInteractiveColor200: string;
            mainInteractiveColor300: string;
            mainInteractiveColor400: string;
            mainInteractiveColor: string;
            mainInteractiveColor600: string;
            mainInteractiveColor700: string;
            mainInteractiveColor800: string;
            mainInteractiveColor900: string;
            alternativeInteractiveColor100: string;
            alternativeInteractiveColor200: string;
            alternativeInteractiveColor300: string;
            alternativeInteractiveColor400: string;
            alternativeInteractiveColor: string;
            alternativeInteractiveColor600: string;
            alternativeInteractiveColor700: string;
            alternativeInteractiveColor800: string;
            alternativeInteractiveColor900: string;
            successInteractiveColor100: string;
            successInteractiveColor200: string;
            successInteractiveColor300: string;
            successInteractiveColor400: string;
            successInteractiveColor: string;
            successInteractiveColor600: string;
            successInteractiveColor700: string;
            successInteractiveColor800: string;
            successInteractiveColor900: string;
            warningInteractiveColor100: string;
            warningInteractiveColor200: string;
            warningInteractiveColor300: string;
            warningInteractiveColor400: string;
            warningInteractiveColor: string;
            warningInteractiveColor600: string;
            warningInteractiveColor700: string;
            warningInteractiveColor800: string;
            warningInteractiveColor900: string;
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
        spacing: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cell: number;
            paddedContainer: number;
        };
        breakpoints: {};
        borderRadii: {
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            cellRadius: number;
            buttonRadius: number;
            textFieldRadius: number;
        };
        interactiveItems: {
            buttonHeight: number;
            textFieldHeight: number;
        };
        textFields: {
            iconSize: number;
        };
        shadowProperties: {
            offset: {
                height: number;
                width: number;
            };
            radius: number;
            opacity: number;
            navigationBarOffset: {
                height: number;
                width: number;
            };
            navigationBarRadius: number;
            navigationBarOpacity: number;
        };
        textVariants: {
            defaults: {
                fontSize: number;
                color: string;
            };
            title: {
                fontSize: number;
                fontWeight: string;
            };
            subtitle: {
                fontSize: number;
                fontWeight: string;
            };
            regular: {};
            smallText: {
                fontSize: number;
            };
            label: {
                color: string;
                fontSize: number;
            };
            placeholder: {
                color: string;
                fontSize: number;
            };
            button: {
                color: string;
                fontWeight: string;
            };
            mainInteractiveColor: {
                color: string;
            };
            alternativeInteractiveColor: {
                color: string;
            };
            successInteractiveColor: {
                color: string;
            };
            warningInteractiveColor: {
                color: string;
            };
            dangerInteractiveColor: {
                color: string;
            };
            mainInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            alternativeInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            successInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            warningInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            dangerInteractiveTitle: {
                color: string;
                fontSize: number;
                fontWeight: string;
            };
            navigationBarButtonColor: {
                color: string;
            };
            navigationBarTitle: {
                fontSize: number;
                fontWeight: string;
                color: string;
            };
            tabBarItemActive: {
                fontSize: number;
                color: string;
            };
            tabBarItemInactive: {
                fontSize: number;
                color: string;
            };
        };
        navigationBar: {
            navigationBarHeight: number;
        };
    }> & Pick<import("react-native").ViewProps & {
        children?: ReactNode;
    }, "children" | "style" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & import("react").RefAttributes<unknown>> | undefined;
}>;
export interface BoxProps extends Omit<Partial<NativeBoxProps<FractalTheme>>, 'children'> {
    children: ReactNode;
}
export interface BaseBoxProps extends Partial<ComponentProps<typeof BaseBox>> {
    children: ReactNode;
}
