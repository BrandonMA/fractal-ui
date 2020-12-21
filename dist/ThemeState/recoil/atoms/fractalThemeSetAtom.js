import { atom } from 'recoil';
import { darkTheme, lightTheme } from '../../defaultThemes';
export var fractalThemeSetAtom = atom({
    key: 'fractalThemeSetAtom',
    "default": {
        "default": lightTheme,
        dark: darkTheme
    }
});
//# sourceMappingURL=fractalThemeSetAtom.js.map