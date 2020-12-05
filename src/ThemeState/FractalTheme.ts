import { Color } from './Colors';

export interface InteractiveItemsTheme {
    mainInteractiveColor: Color;
    alternativeInteractiveColor: Color;
    successInteractiveColor: Color;
    warningInteractiveColor: Color;
    dangerInteractiveColor: Color;
}

interface TabBarTheme {
    tabBarInactiveColor: string;
}

interface TextTheme {
    titleColor: string;
    subTitleColor: string;
    textColor: string;
    helperTextColor: string;
}

interface FieldTheme {
    fieldBackgroundColor: string;
    fieldContrastColor: string;
}

interface ContainerTheme {
    backgroundColor: string;
    backgroundContrastColor: string;
}

export interface FractalTheme extends InteractiveItemsTheme, TextTheme, ContainerTheme, FieldTheme, TabBarTheme {}

export interface FractalThemeSet {
    default: FractalTheme;
    [key: string]: FractalTheme;
}
