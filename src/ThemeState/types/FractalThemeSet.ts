import { FractalTheme } from './FractalTheme';

export interface FractalThemeSet {
    default: FractalTheme;
    [key: string]: FractalTheme;
}
