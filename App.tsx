import React, { useCallback, useState } from 'react';
import { registerRootComponent } from 'expo';
import { Background, Cell, Button, FractalAppRoot, Box } from './src';
import { ScrollView } from 'react-native';

const styleVariants = {
    initial: { width: 20, height: 50, opacity: 0 },
    small: { width: 50, height: 50, opacity: 1 },
    visible: { width: 200, height: 200, opacity: 1 }
};

export function App(): JSX.Element {
    const [animatedVariant, setAnimatedVariant] = useState('visible');
    const toggleVariant = useCallback(() => {
        setAnimatedVariant((currentValue) => (currentValue === 'visible' ? 'small' : 'visible'));
    }, []);

    return (
        <FractalAppRoot>
            <Background flex={1} justifyContent='center' alignItems='center' flexDirection='column'>
                <ScrollView>
                    <Box flex={1}>
                        <Button onPress={toggleVariant} height={200} variant='main' />
                    </Box>
                    <Box width='100%' flex={1} justifyContent='space-around'>
                        <Cell initial={styleVariants.initial} animate={styleVariants.visible} backgroundColor='white' />
                        <Cell initial={'initial'} animate={'visible'} variants={styleVariants} backgroundColor='white' />
                        <Cell logRender initial={'initial'} animate={animatedVariant} variants={styleVariants} backgroundColor='white' />
                    </Box>
                </ScrollView>
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
