import React, { useCallback, useState } from 'react';
import { registerRootComponent } from 'expo';
import { Background, Cell, Button, FractalAppRoot, PaddingContainer, Text, ActivityIndicator, Box } from './src';
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
                    <Cell
                        marginBottom={12}
                        height={100}
                        width={300}
                        justifyContent='center'
                        alignItems='center'
                        animate={animatedVariant}
                        variants={styleVariants}
                        padding={16}
                    >
                        <Button text={'Change Size'} onPress={toggleSpringVariant} variant='alternative' />
                    </Cell>
                    <Cell
                        alignItems='center'
                        justifyContent='center'
                        marginBottom={12}
                        initial='initial'
                        animate={springVariant}
                        variants={styleVariants}
                    >
                        <Text variant='normal'>Hola</Text>
                    </Cell>
                    <ActivityIndicator color='blue' width={48} height={48} />
                </PaddingContainer>
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
