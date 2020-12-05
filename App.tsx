import React, { useCallback } from 'react';
import { registerRootComponent } from 'expo';
import { FractalAppRoot } from './src/FractalAppRoot';
import { colors } from './src/ThemeState/Colors';
import { FractalThemeSet } from './src/ThemeState/FractalTheme';
import { defaultTheme } from './src/ThemeState/themeSetAtom';
import { useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from './src/ThemeState/currentThemeIdentifierAtom';
import { BaseButton } from './src/ThemeState/ThemedComponents/BaseButton';
import { SafeAreaView } from 'react-native';
import { BaseContainer } from './src';

const newThemeSet: FractalThemeSet = {
    default: {
        ...defaultTheme,
        mainInteractiveColor: colors.green
    },
    darkMode: {
        ...defaultTheme,
        mainInteractiveColor: colors.white
    }
};

function ThemeSwapper(): JSX.Element {
    const setCurrentThemeIdentifier = useSetRecoilState(currentThemeIdentifierAtom);

    const callback = useCallback(() => {
        setCurrentThemeIdentifier((current) => (current === 'default' ? 'darkMode' : 'default'));
    }, []);

    return <BaseButton colorStyle='mainInteractiveColor' onPress={callback} text='Prueba' />;
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
