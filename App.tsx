import React, { useCallback, useState } from 'react';
import { registerRootComponent } from 'expo';
import { Background, Cell, Button, FractalAppRoot, PaddingContainer } from './src';
import { SafeAreaView } from 'react-native';

const styleVariants = {
    small: { scale: 0.5, opacity: 0 },
    big: { scale: 1, opacity: 1 },
    initial: { height: 15, width: 15, opacity: 0 },
    visible: { height: 100, width: 100, opacity: 1 }
};

export function App(): JSX.Element {
    const [animatedVariant, setAnimatedVariant] = useState('big');
    const toggleVariant = useCallback(() => {
        setAnimatedVariant((currentValue) => (currentValue === 'big' ? 'small' : 'big'));
    }, []);

    const [springVariant, setSpringVariant] = useState('visible');
    const toggleSpringVariant = useCallback(() => {
        setSpringVariant((currentValue) => (currentValue === 'visible' ? 'initial' : 'visible'));
    }, []);

    return (
        <FractalAppRoot>
            <Background>
                <PaddingContainer>
                    <SafeAreaView />
                    <Button text='Hide' marginBottom={12} onPress={toggleVariant} width={200} variant='main' />
                    <Cell marginBottom={12} initial={styleVariants.initial} animate={styleVariants.visible} />
                    <Cell marginBottom={12} initial={'initial'} animate={'visible'} variants={styleVariants} />
                    <Cell marginBottom={12} height={100} width={100} animate={animatedVariant} variants={styleVariants} />
                    <Button text={'Change Size'} marginBottom={12} onPress={toggleSpringVariant} width={200} variant='alternative' />
                    <Cell marginBottom={12} initial='initial' animate={springVariant} variants={styleVariants} />
                </PaddingContainer>
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
