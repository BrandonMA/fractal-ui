import { FractalTheme } from './FractalTheme';
import { lightFractalTheme } from './lightFractalTheme';
import { DeepPartial } from 'utility-types';

// All themes must be able to be represented as JSON objects, so this is the most simple way to deep copy it without an external dependency.
export function createFractalTheme(properties: DeepPartial<FractalTheme>, baseTheme: FractalTheme = lightFractalTheme): FractalTheme {
    const newTheme = JSON.parse(JSON.stringify(baseTheme));
    const keys = Object.keys(baseTheme);
    keys.forEach((key) => {
        Object.assign(newTheme[key], properties[key]);
    });
    return newTheme;
}
