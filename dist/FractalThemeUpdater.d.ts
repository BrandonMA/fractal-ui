import { ReactNode } from 'react';
import { FractalTheme } from './themes/FractalTheme';
export interface FractalThemeUpdaterProps {
    children: ReactNode;
    handleThemeManually?: boolean;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}
export declare function FractalThemeUpdater({ children, handleThemeManually, lightTheme, darkTheme }: FractalThemeUpdaterProps): JSX.Element;
