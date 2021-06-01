import React from 'react';
import { useTheme, Box, Avatar, Image, ImageBackground, Text } from '../../src';

function AvatarImageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Avatar source={'https://picsum.photos/id/370/200'} label='Avatar' />
            <Image
                source={'https://picsum.photos/id/870/200/300'}
                label='Asset'
                marginLeft={spacings.m}
                width={100}
                height={64}
                borderRadius={16}
            />
        </Box>
    );
}

function ImageBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ImageBackground
                source={'https://picsum.photos/id/870/200/300'}
                width={200}
                height={200}
                borderRadius={16}
                justifyContent={'center'}
            >
                <Text variant={'button'}>Lorem Ipsum is simply dummy text.</Text>
            </ImageBackground>
        </Box>
    );
}

export function ImagesFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Avatar and Image Example</Text>
            <AvatarImageFragment />
            <Text variant={'title'}>ImageBackground Example</Text>
            <ImageBackgroundFragment />
        </>
    );
}
