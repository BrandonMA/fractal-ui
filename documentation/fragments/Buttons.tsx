import { Box, Button, CircularIconButton, Text, TextButton, useTheme } from '../../src';
import React, { useState } from 'react';
import { ToggleButton } from '../../dist/components/buttons/ToggleButton';
import { RoundedToggleButton } from '../../src/components/buttons/RoundedToggleButton';
import { LoadIcon } from '../../src/assets/LoadIcon';
import { FilterIcon } from '../../src/assets/FilterIcon';
import { TrashIcon } from '../../src/assets/TrashIcon';

export function ButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant={'main'} text={'Button'} marginBottom={spacings.s} />
            <Button variant={'main'} text={'Button'} marginBottom={spacings.s} reduceColor />
            <Button variant={'content'} text='Button with content variant' marginBottom={spacings.s} />
            <Button variant={'content'} text='Button with content variant' marginBottom={spacings.s} reduceColor />
        </Box>
    );
}

export function ToggleButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ToggleButton variant={'main'} active={false} marginBottom={spacings.s} />
            <ToggleButton variant={'content'} active={false} />
        </Box>
    );
}

export function RoundedToggleButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <RoundedToggleButton variant={'main'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'main'} active={active} onPress={toggleActive} marginBottom={spacings.s} useGrayVariant>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'alternative'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'success'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'warning'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'danger'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'content'} active={active} onPress={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'content'} active={active} onPress={toggleActive} useGrayVariant>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
        </Box>
    );
}

export function TextButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <TextButton variant={'main'} marginBottom={spacings.s}>
                Main
            </TextButton>
            <TextButton variant={'alternative'} marginBottom={spacings.s}>
                Alternative
            </TextButton>
            <TextButton variant={'success'} marginBottom={spacings.s}>
                Success
            </TextButton>
            <TextButton variant={'warning'} marginBottom={spacings.s}>
                Warning
            </TextButton>
            <TextButton variant={'danger'}>Danger</TextButton>
        </Box>
    );
}

export function CircularIconButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <CircularIconButton variant={'main'} marginRight={spacings.m}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'main'} marginRight={spacings.m} reduceColor>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'success'} marginRight={spacings.m}>
                {(color) => <FilterIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'success'} marginRight={spacings.m} reduceColor>
                {(color) => <FilterIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'danger'} marginRight={spacings.m}>
                {(color) => <TrashIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'content'} marginRight={spacings.m}>
                {(color) => <TrashIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'content'} marginRight={spacings.m} reduceColor>
                {(color) => <TrashIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
        </Box>
    );
}

export function ButtonsFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Text Button Example</Text>
            <TextButtonFragment />
            <Text variant={'title'}>Button Example</Text>
            <ButtonFragment />
            <Text variant={'title'}>ToggleButton Example</Text>
            <ToggleButtonFragment />
            <Text variant={'title'}>RoundedToggleButton Example</Text>
            <RoundedToggleButtonFragment />
            <Text variant={'title'}>Circular Icon Button Example</Text>
            <CircularIconButtonFragment />
        </>
    );
}
