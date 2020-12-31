import { lightFractalTheme } from './lightFractalTheme';
// All themes must be able to be represented as JSON objects, so this is the most simple way to deep copy it without an external dependency.
export function createFractalTheme(properties) {
    var newTheme = JSON.parse(JSON.stringify(lightFractalTheme));
    var keys = Object.keys(lightFractalTheme);
    keys.forEach(function (key) {
        Object.assign(newTheme[key], properties[key]);
    });
    return newTheme;
}
//# sourceMappingURL=createFractalTheme.js.map