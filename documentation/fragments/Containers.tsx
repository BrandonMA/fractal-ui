import React, { useState } from 'react';
import { useTheme, Box, Layer, PaddingLayer, MarginLayer, HorizontalLayer, Separator, Button, Text, blue } from '../../src';

const styleVariants = {
    layerInitial: { scale: 0, opacity: 0, backgroundColor: blue.base100 },
    layerVisible: { scale: 1, opacity: 1, backgroundColor: blue.base },
    initial: { height: 15, width: 15, opacity: 0 },
    visible: { height: 100, width: 100, opacity: 1 }
};

function LayerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
            <HorizontalLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black}>
                <Box alignItems={'center'} justifyContent={'center'} width={'50%'}>
                    <Text variant={'subtitle'}>Horizontal Layer</Text>
                </Box>
                <Box alignItems={'center'} justifyContent={'center'} width={'50%'}>
                    <Text variant={'subtitle'}>Horizontal Layer</Text>
                </Box>
            </HorizontalLayer>
            <MarginLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black}>
                <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                    <Text variant={'subtitle'}>Margin Layer</Text>
                </Box>
                <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                    <Text variant={'subtitle'}>Margin Layer</Text>
                </Box>
            </MarginLayer>
            <PaddingLayer height={150} borderStyle={'solid'} borderWidth={2} borderColor={colors.black}>
                <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                    <Text variant={'subtitle'}>Padding Layer</Text>
                </Box>
                <Box alignItems={'center'} justifyContent={'center'} width={'100%'} height={'50%'}>
                    <Text variant={'subtitle'}>Padding Layer</Text>
                </Box>
            </PaddingLayer>
        </Layer>
    );
}

function LayerAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [layerVariant, setLayerVariant] = useState('layerVisible');

    const toggleVariant = () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'layerInitial' : 'layerVisible'));

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Layer
                height={100}
                width={100}
                initial={'layerInitial'}
                backgroundColor={'#FFF'}
                animate={layerVariant}
                variants={styleVariants}
            />
            <Button
                width={268}
                variant={'main'}
                alignSelf={'center'}
                text={'Toggle animation'}
                onPress={toggleVariant}
                marginTop={spacings.s}
            />
        </Box>
    );
}

function BoxContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'normal'} marginBottom={spacings.m}>
                Use it to separate your components into blocks.
            </Text>
            <Separator marginBottom={spacings.m} />
            <Text variant={'normal'}>Like this.</Text>
        </Box>
    );
}

export function ContainersFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Layer Examples</Text>
            <LayerFragment />
            <Text variant={'title'}>Layer Animated Example</Text>
            <LayerAnimatedFragment />
            <Text variant={'title'}>Box Example</Text>
            <BoxContentFragment />
        </>
    );
}
