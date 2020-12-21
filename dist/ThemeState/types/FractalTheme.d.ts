import { Color } from '../baseColors';
export interface InteractiveColors {
    mainInteractiveColor: Color;
    alternativeInteractiveColor: Color;
    successInteractiveColor: Color;
    warningInteractiveColor: Color;
    dangerInteractiveColor: Color;
}
interface NavigationBarColors {
    navigationBarColor: Color;
}
interface TabBarColors {
    tabBarColor: Color;
}
interface TextColors {
    textColor: Color;
}
interface FieldColors {
    fieldColor: Color;
}
interface ContainerColors {
    containerColor: Color;
}
export interface FractalTheme extends InteractiveColors, TextColors, ContainerColors, FieldColors, TabBarColors, NavigationBarColors {
}
export {};
