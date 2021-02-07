import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FractalTheme } from '../themes/FractalTheme';

export function useFractalTheme(): FractalTheme {
    const [theme] = useContext(ThemeContext);
    return theme;
}
