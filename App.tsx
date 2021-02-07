import React from 'react';
import { registerRootComponent } from 'expo';
import { Background, Cell, FractalAppRoot } from './src';

export function App(): JSX.Element {
    return (
        <FractalAppRoot>
            <Background flex={1}>
                <Cell initial={{ width: 20, height: 50 }} animate={{ width: 200, height: 500 }} backgroundColor='white' />
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
