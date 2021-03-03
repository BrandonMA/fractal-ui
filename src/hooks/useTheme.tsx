import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FractalTheme } from '../themes/FractalTheme';

export function useTheme(): FractalTheme {
    return useContext(ThemeContext);
}
