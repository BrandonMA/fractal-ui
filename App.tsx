import React, { memo, useCallback, useEffect, useState } from 'react';
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
    ErrorMessage,
    SearchBar,
    ColorPicker,
    DatePicker,
    TimePicker,
    brinkPink,
    FractalTheme,
    lime,
    pink,
    purple
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';

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

function FinalColorPicker(): JSX.Element {
    const theme = useTheme<FractalTheme>();

    return (
        <>
            <ColorPicker
                onColorChange={(color) => console.log(color)}
                marginBottom={'m'}
                colors={[
                    theme.colors.mainInteractiveColor,
                    theme.colors.alternativeInteractiveColor,
                    theme.colors.successInteractiveColor,
                    theme.colors.dangerInteractiveColor,
                    theme.colors.warningInteractiveColor
                ]}
            />
            <ColorPicker
                onColorChange={(color) => console.log(color)}
                colors={[
                    theme.colors.mainInteractiveColor,
                    theme.colors.alternativeInteractiveColor,
                    theme.colors.successInteractiveColor,
                    theme.colors.dangerInteractiveColor,
                    theme.colors.warningInteractiveColor,
                    purple.base,
                    brinkPink.base,
                    lime.base,
                    pink.base
                ]}
            />
        </>
    );
}

function App(): JSX.Element {
    const [text, setText] = useState('');

    const renderEmailIcon = useCallback(
        (color: string, size: number): JSX.Element => <Entypo selectable={false} name='email' size={size} color={color} />,
        []
    );

    const renderChevronLeft = useCallback(
        (color: string): JSX.Element => <Entypo selectable={false} name='chevron-left' size={20} color={color} />,
        []
    );

    const renderWarning = useCallback(
        (color: string): JSX.Element => <Entypo selectable={false} name={'warning'} size={20} color={color} />,
        []
    );

    return (
        <FractalAppRoot handleThemeManually={true}>
            <Background>
                <SafeAreaView>
                    <ScrollView>
                        <PaddedContainer zIndex={2000}>
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
                                <IconTextField
                                    rightImage={renderEmailIcon}
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
                                    iosDoneText='Select'
                                    items={[
                                        ['1', 'Hoy'],
                                        ['2', 'Ayer'],
                                        ['3', 'Prueba'],
                                        ['4', 'Cuatro'],
                                        ['5', 'Cinco']
                                    ]}
                                    marginBottom='m'
                                    initialValue={'5'}
                                />
                                <DatePicker
                                    iosDoneText='Select'
                                    marginBottom='m'
                                    onChange={(date) => console.log(date.toLocaleDateString())}
                                />
                                <TimePicker
                                    iosDoneText='Select'
                                    marginBottom='m'
                                    onChange={(date) => console.log(date.toLocaleTimeString())}
                                />
                                <Message
                                    title='Title'
                                    messageType={'warning'}
                                    description={'This is the description of my error with icon and title'}
                                    icon={renderWarning}
                                    marginBottom={'m'}
                                />
                                <ErrorMessage marginBottom={'m'}>
                                    <BuggyComponent />
                                </ErrorMessage>
                                <SearchBar placeholder={'Search...'} marginBottom={'m'} />
                                <FinalColorPicker />
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
