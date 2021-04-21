import { lightFractalTheme } from './lightFractalTheme';
export function createFractalTheme(properties, baseTheme) {
    if (baseTheme === void 0) { baseTheme = lightFractalTheme; }
    var newTheme = JSON.parse(JSON.stringify(baseTheme));
    var keys = Object.keys(baseTheme);
    keys.forEach(function (key) {
        Object.assign(newTheme[key], properties[key]);
    });
    return newTheme;
}
//# sourceMappingURL=createFractalTheme.js.map