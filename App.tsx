import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { registerRootComponent } from 'expo';
import {
    FractalAppRoot,
    Background,
    Cell,
    TextField,
    PaddedContainer,
    IconTextField,
    Text,
    TextButton,
    Picker,
    Button,
    SocialMediaButtons,
    DetailsRow,
    DetailsList,
    useThemeIdentifier,
    Separator,
    Message,
    ErrorMessage
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { Entypo as BaseEntypo } from '@expo/vector-icons';

const Entypo = memo(BaseEntypo);
const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

function ThemeSwapper(): JSX.Element {
    const [, setThemeIdentifier] = useThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current) => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);
    return <Button onPress={handlePress} variant='alternativeInteractiveColor' text='Swap Theme' marginBottom='m' />;
}

function BuggyComponent(): JSX.Element {
    const [showError, setShowError] = useState(false);

    const triggerError = useCallback(() => {
        setShowError(true);
    }, []);

    useEffect(() => {
        if (showError) {
            throw Error('This should be catched, sent by BuggyComponent');
        }
    }, [showError]);

    return <Button variant={'dangerInteractiveColor'} text='Trigger Error' onPress={triggerError} />;
}

function App(): JSX.Element {
    const [text, setText] = useState('');

    const renderEmailIcon = useMemo(
        () => (color: string, size: number): JSX.Element => <Entypo name='email' size={size} color={color} />,
        []
    );

    const renderChevronLeft = useMemo(() => (color: string): JSX.Element => <Entypo name='chevron-left' size={20} color={color} />, []);

    const renderWarning = useMemo(() => (color: string): JSX.Element => <Entypo name={'warning'} size={20} color={color} />, []);

    return (
        <FractalAppRoot handleThemeManually={true}>
            <Background>
                <SafeAreaView>
                    <ScrollView>
                        <PaddedContainer>
                            <DetailsList
                                title='Title'
                                titleVariant='warningInteractiveTitle'
                                details={detailsCardContent}
                                marginBottom='m'
                            />
                            <Cell>
                                <TextField value={text} onChangeText={setText} placeholder='Placeholder...' marginBottom='m' />
                                <IconTextField
                                    leftImage={renderEmailIcon}
                                    value={text}
                                    onChangeText={setText}
                                    placeholder='Placeholder...'
                                    marginBottom='m'
                                />
                                <ThemeSwapper />
                                <Text variant='title' marginBottom='m'>
                                    Title
                                </Text>
                                <Text variant='subtitle' marginBottom='m'>
                                    Subtitle
                                </Text>
                                <Text variant='regular' marginBottom='m'>
                                    Regular
                                </Text>
                                <Text variant='label' marginBottom='m'>
                                    label
                                </Text>
                                <Text variant='placeholder' marginBottom='m'>
                                    Placeholder
                                </Text>
                                <TextButton variant='mainInteractiveTitle' text='Button' marginBottom='m' />
                                <TextButton alignSelf='flex-start' variant='alternativeInteractiveColor' text='Button' marginBottom='m' />
                                <TextButton alignSelf='center' variant='successInteractiveColor' text='Button' marginBottom='m'>
                                    {renderChevronLeft}
                                </TextButton>
                                <TextButton alignSelf='flex-end' variant='warningInteractiveColor' text='Button' marginBottom='m' />
                                <Separator marginBottom='m' />
                                <TextButton alignSelf='baseline' variant='dangerInteractiveColor' text='Button' marginBottom='m' />
                                <DetailsRow title='Title' details='Details' marginBottom='m' />
                                <Picker
                                    iosDoneText='Done'
                                    items={[
                                        ['1', 'Hoy'],
                                        ['2', 'Ayer'],
                                        ['3', 'Prueba'],
                                        ['4', 'Cuatro'],
                                        ['5', 'Cinco']
                                    ]}
                                    marginBottom='m'
                                />
                                <Button variant='mainInteractiveColor' text='Button' reduceColor marginBottom={'m'} />
                                <Message
                                    title='Title'
                                    messageType={'warning'}
                                    description={'This is the description of my error with icon and title'}
                                    icon={renderWarning}
                                    marginBottom={'m'}
                                />
                                <ErrorMessage>
                                    <BuggyComponent />
                                </ErrorMessage>
                            </Cell>
                        </PaddedContainer>
                        <SocialMediaButtons />
                    </ScrollView>
                </SafeAreaView>
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
