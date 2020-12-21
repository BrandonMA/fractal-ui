import { ReactNode } from 'react';
import { FractalThemeSet } from './types/FractalThemeSet';
export interface FractalThemeAppRootProps {
    children: ReactNode;
    themeSet?: FractalThemeSet;
}
export declare function FractalThemeRoot(props: FractalThemeAppRootProps): JSX.Element;
