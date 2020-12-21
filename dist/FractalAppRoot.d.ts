import { ReactNode } from 'react';
import { FractalThemeAppRootProps } from './ThemeState/FractalThemeRoot';
interface FractalAppRootProps extends FractalThemeAppRootProps {
    children: ReactNode;
}
export declare function FractalAppRoot(props: FractalAppRootProps): JSX.Element;
export {};
