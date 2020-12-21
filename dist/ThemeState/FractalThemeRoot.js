import React, { useLayoutEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fractalThemeSetAtom } from './recoil/atoms/fractalThemeSetAtom';
import { useUpdateThemeProperties } from './hooks/useUpdateThemeProperties';
import { currentThemeIdentifierAtom } from './recoil';
import { StatusBar } from 'react-native';
export function FractalThemeRoot(props) {
    var children = props.children, themeSet = props.themeSet;
    var setThemeSet = useSetRecoilState(fractalThemeSetAtom);
    var currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);
    useLayoutEffect(function () {
        if (themeSet != null) {
            setThemeSet(themeSet);
        }
    }, [setThemeSet, themeSet]);
    useUpdateThemeProperties();
    return (React.createElement(React.Fragment, null,
        React.createElement(StatusBar, { barStyle: currentThemeIdentifier === 'default' ? 'dark-content' : 'light-content' }),
        children));
}
//# sourceMappingURL=FractalThemeRoot.js.map