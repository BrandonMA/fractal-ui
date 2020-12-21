import React from 'react';
import { RecoilRoot } from 'recoil';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FractalThemeRoot } from './ThemeState/FractalThemeRoot';
import { NavigationRoot } from './Navigation';
enableScreens();
export function FractalAppRoot(props) {
    var children = props.children, themeSet = props.themeSet;
    return (React.createElement(RecoilRoot, null,
        React.createElement(FractalThemeRoot, { themeSet: themeSet },
            React.createElement(NavigationRoot, null,
                React.createElement(SafeAreaProvider, null, children)))));
}
//# sourceMappingURL=FractalAppRoot.js.map