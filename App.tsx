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
    purple,
    ActivityIndicator,
    AnimatedPresence,
    RightSlideAnimation,
    MiddleCellModal,
    BaseBox
} from './src';
import { InteractionManager, LayoutAnimation, SafeAreaView, ScrollView } from 'react-native';
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
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleVisible = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setVisible((currentValue) => !currentValue);
    }, [setVisible]);

    const toggleLoading = useCallback(() => {
        InteractionManager.runAfterInteractions(() => {
            setLoading((loading) => !loading);
        });
    }, [setLoading]);

    const renderEmailIcon = useCallback(
        (color: string, size: number): JSX.Element => <Entypo selectable={false} name='email' size={size} color={color} />,
        []
    );

    const renderChevronLeft = useCallback(
        (color: string): JSX.Element => <Entypo selectable={false} name='chevron-left' size={20} color={color} />,
        []
    );

    const renderChevronRight = useCallback(
        (color: string): JSX.Element => <Entypo selectable={false} name='chevron-right' size={20} color={color} />,
        []
    );

    const renderWarning = useCallback(
        (color: string): JSX.Element => <Entypo selectable={false} name={'warning'} size={20} color={color} />,
        []
    );

    return (
        <FractalAppRoot>
            <Background>
                <SafeAreaView>
                    <ScrollView>
                        <PaddedContainer zIndex={2000}>
                            <BaseBox marginBottom={'m'}>
                                <ActivityIndicator color={'textColor'} />
                            </BaseBox>
                            <DetailsList
                                title='Title'
                                titleVariant='warningInteractiveTitle'
                                details={detailsCardContent}
                                marginBottom='m'
                            />
                            <Cell>
                                <Button
                                    variant={'mainInteractiveColor'}
                                    onPress={toggleVisible}
                                    text={'Toggle Hidden Component'}
                                    marginBottom={'m'}
                                />
                                <AnimatedPresence>
                                    {visible ? (
                                        <RightSlideAnimation width='100%' alignItems='center' marginBottom='m'>
                                            <BaseBox height={100} width={100} borderRadius={'m'} backgroundColor='facebook' />
                                        </RightSlideAnimation>
                                    ) : null}
                                </AnimatedPresence>
                                <Button
                                    variant={'mainInteractiveColor'}
                                    loading={loading}
                                    onPress={toggleLoading}
                                    text={'Hihi'}
                                    marginBottom={'m'}
                                />
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
                                <TextButton variant='mainInteractiveTitle' marginBottom='m'>
                                    Main Interactive Title
                                </TextButton>
                                <TextButton alignSelf='flex-start' variant='alternativeInteractiveColor' marginBottom='m'>
                                    Alternative Interactive Color
                                </TextButton>
                                <TextButton
                                    alignSelf='center'
                                    variant='successInteractiveColor'
                                    leftIcon={renderChevronLeft}
                                    marginBottom='m'
                                >
                                    Success Interactive Color with left icon
                                </TextButton>
                                <TextButton
                                    alignSelf='flex-end'
                                    variant='warningInteractiveColor'
                                    rightIcon={renderChevronRight}
                                    marginBottom='m'
                                >
                                    Warning Interactive Color
                                </TextButton>
                                <Separator marginBottom='m' />
                                <TextButton alignSelf='baseline' variant='dangerInteractiveColor' marginBottom='m'>
                                    Danger Interactive Color
                                </TextButton>
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
                <MiddleCellModal visible={visible} onDismiss={toggleVisible} />
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
