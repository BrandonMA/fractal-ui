import React, { useCallback, useState } from 'react';
import { MainTabNavigator } from './tabNavigator/MainTabNavigator';
import { NavigationRoot, Redirect } from '../../../src';
import { Platform, StatusBar, UIManager } from 'react-native';
import { RecoilRoot } from 'recoil';
import { enableMapSet } from 'immer';
import { BaseAuthentication } from '../../../src/Layout/components/BaseAuthentication';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableMapSet();

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function Root(): JSX.Element {
    const [authenticated, setAuthenticated] = useState(false);
    const finishAuthentication = useCallback(() => setAuthenticated(true), [setAuthenticated]);

    return (
        <RecoilRoot>
            {Platform.OS === 'ios' ? <StatusBar barStyle='dark-content' /> : <StatusBar barStyle='default' />}
            <NavigationRoot>
                {authenticated ? (
                    <MainTabNavigator />
                ) : (
                    <SafeAreaProvider>
                        <BaseAuthentication
                            email='Email'
                            password='Contraseña'
                            signIn='Iniciar sesión'
                            signUp='Crear Cuenta'
                            swapToSignUp={'¿No tienes cuenta?'}
                            swapToSignIn={'¿Ya tienes cuenta?'}
                            onSignIn={finishAuthentication}
                            onSignUp={finishAuthentication}
                            tint='#005CB3'
                        />
                    </SafeAreaProvider>
                )}
                {authenticated ? null : <Redirect from='/' to='/authenticate' exact />}
            </NavigationRoot>
        </RecoilRoot>
    );
}
