import React, { useCallback } from 'react';
import { registerRootComponent } from 'expo';
import { FractalAppRoot } from './src/FractalAppRoot';
import { defaultTheme } from './src/ThemeState/recoil/atoms/fractalThemeSetAtom';
import { useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from './src/ThemeState/recoil/atoms/currentThemeIdentifierAtom';
import { BaseButton } from './src/ThemeState/components/BaseButton';
import { SafeAreaView } from 'react-native';
import { BaseContainer, green, orange } from './src';
import { FractalThemeSet } from './src/ThemeState/types/FractalThemeSet';

const newThemeSet: FractalThemeSet = {
    default: {
        ...defaultTheme,
        mainInteractiveColor: green
    },
    darkMode: {
        ...defaultTheme,
        mainInteractiveColor: orange
    }
};

function ThemeSwapper(): JSX.Element {
    const setCurrentThemeIdentifier = useSetRecoilState(currentThemeIdentifierAtom);

    const callback = useCallback(() => {
        setCurrentThemeIdentifier((current) => (current === 'default' ? 'darkMode' : 'default'));
    }, []);

    return <BaseButton colorStyle='mainInteractiveColor' onPress={callback} text='Prueba' removeShadow />;
}

function App(): JSX.Element {
    return (
        <FractalAppRoot themeSet={newThemeSet}>
            <SafeAreaView>
                <BaseContainer>
                    <ThemeSwapper />
                </BaseContainer>
            </SafeAreaView>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
