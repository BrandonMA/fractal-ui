import React, { useState } from 'react';
import {
    useTheme,
    Box,
    Button,
    Text,
    CrossButton,
    CircularIconButton,
    TextButton,
    ToggleButton,
    RoundedToggleButton,
    LoadIcon,
    FilterIcon,
    TrashIcon,
    AppleIcon,
    BugIcon,
    CheckIcon,
    ChevronDownIcon,
    FacebookIcon,
    GoogleIcon,
    MoreVerticalIcon,
    SearchIcon,
    PreviousIcon,
    NextIcon
} from '../../src';

export function CrossButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box alignContent={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <CrossButton onPress={() => console.log('Cross button pressed')} />
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
            <TextButton variant={'main'} marginBottom={spacings.s} disabled>
                Main disabled
            </TextButton>
            <TextButton variant={'alternative'} marginBottom={spacings.s}>
                Alternative
            </TextButton>
            <TextButton variant={'danger'} marginBottom={spacings.s}>
                Danger
            </TextButton>
            <TextButton variant={'warning'} marginBottom={spacings.s}>
                Warning
            </TextButton>
            <TextButton variant={'success'} marginBottom={spacings.s}>
                Success
            </TextButton>
            <TextButton
                variant={'main'}
                flexDirection={'row'}
                marginBottom={spacings.s}
                leftIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
            >
                Main with left icon
            </TextButton>
            <TextButton
                variant={'alternative'}
                flexDirection={'row'}
                marginBottom={spacings.s}
                rightIcon={(color) => <SearchIcon height={20} width={20} fill={color} />}
            >
                Alternative with right icon
            </TextButton>
            <TextButton
                variant={'danger'}
                flexDirection={'row'}
                marginBottom={spacings.s}
                leftIcon={(color) => <PreviousIcon height={20} width={20} fill={color} />}
                rightIcon={(color) => <NextIcon height={20} width={20} fill={color} />}
            >
                Danger with left and right icon
            </TextButton>
        </Box>
    );
}

export function ButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant={'main'} text={'Main'} marginBottom={spacings.s} />
            <Button variant={'main'} text={'Main reduced'} marginBottom={spacings.s} reduceColor />
            <Button variant={'main'} text={'Main disabled'} marginBottom={spacings.s} disabled />
            <Button variant={'main'} text={'Main loading'} marginBottom={spacings.s} loading />
            <Button variant={'main'} text={'Main reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
            <Button variant={'alternative'} text={'Alternative'} marginBottom={spacings.s} />
            <Button variant={'alternative'} text={'Alternative reduced'} marginBottom={spacings.s} reduceColor />
            <Button variant={'danger'} text={'Danger'} marginBottom={spacings.s} />
            <Button variant={'danger'} text={'Danger reduced'} marginBottom={spacings.s} reduceColor />
            <Button variant={'warning'} text={'Warning'} marginBottom={spacings.s} />
            <Button variant={'warning'} text={'Warning reduced'} marginBottom={spacings.s} reduceColor />
            <Button variant={'success'} text={'Success'} marginBottom={spacings.s} />
            <Button variant={'success'} text={'Success reduced'} marginBottom={spacings.s} reduceColor />
            <Button variant={'content'} text={'Button with content variant'} marginBottom={spacings.s} />
            <Button variant={'content'} text={'Button with content variant'} marginBottom={spacings.s} reduceColor />
        </Box>
    );
}

export function ToggleButtonFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const [active, setActive] = useState(false);
    const [text, setText] = useState('Toggle Button');

    const toggleActive = (active: boolean | ((prevState: boolean) => boolean)) => {
        setActive(active);
        setText(active ? 'Toggle Button activated' : 'Toggle Button');
    };

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {() => (
                    <Text variant={'button'} color={colors.text}>
                        {text}
                    </Text>
                )}
            </ToggleButton>
            <ToggleButton variant={'main'} active={false} marginBottom={spacings.s} disabled>
                {() => (
                    <Text variant={'button'} color={colors.text}>
                        {'Disabled'}
                    </Text>
                )}
            </ToggleButton>
            <ToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </ToggleButton>
            <ToggleButton variant={'main'} active={active} onActiveChange={toggleActive} useGrayVariant>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </ToggleButton>
        </Box>
    );
}

export function RoundedToggleButtonFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const toggleActive = (active: boolean | ((prevState: boolean) => boolean)) => setActive(active);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <RoundedToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <FacebookIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'main'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} useGrayVariant>
                {(color) => <FacebookIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'alternative'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <AppleIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton
                variant={'alternative'}
                active={active}
                onActiveChange={toggleActive}
                marginBottom={spacings.s}
                useGrayVariant
            >
                {(color) => <AppleIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'danger'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <BugIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'danger'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} useGrayVariant>
                {(color) => <BugIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'warning'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <CheckIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'warning'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} useGrayVariant>
                {(color) => <CheckIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'success'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'success'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s} useGrayVariant>
                {(color) => <ChevronDownIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} marginBottom={spacings.s}>
                {(color) => <GoogleIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
            <RoundedToggleButton variant={'content'} active={active} onActiveChange={toggleActive} useGrayVariant>
                {(color) => <GoogleIcon height={24} width={24} fill={color} />}
            </RoundedToggleButton>
        </Box>
    );
}

export function CircularIconButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <CircularIconButton variant={'main'} marginBottom={spacings.s}>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'main'} marginBottom={spacings.s} reduceColor>
                {(color) => <LoadIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'alternative'} marginBottom={spacings.s}>
                {(color) => <FilterIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'alternative'} marginBottom={spacings.s} reduceColor>
                {(color) => <FilterIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'danger'} marginBottom={spacings.s}>
                {(color) => <TrashIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'danger'} marginBottom={spacings.s} reduceColor>
                {(color) => <TrashIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'warning'} marginBottom={spacings.s}>
                {(color) => <MoreVerticalIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'warning'} marginBottom={spacings.s} reduceColor>
                {(color) => <MoreVerticalIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'success'} marginBottom={spacings.s}>
                {(color) => <SearchIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
            <CircularIconButton variant={'success'} marginBottom={spacings.s} reduceColor>
                {(color) => <SearchIcon height={24} width={24} fill={color} />}
            </CircularIconButton>
        </Box>
    );
}

export function ButtonsFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Cross Button Example</Text>
            <CrossButtonFragment />
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
