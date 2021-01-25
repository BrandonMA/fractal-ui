import React, { useCallback, useState } from 'react';
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
    Separator,
    ErrorMessage,
    SearchBar,
    DatePicker,
    TimePicker,
    ActivityIndicator,
    AnimatedPresence,
    RightSlideAnimation,
    MiddleCellModal,
    BaseBox
} from './src';
import { InteractionManager, LayoutAnimation, SafeAreaView, ScrollView } from 'react-native';
import { FinalColorPicker } from './examples/FinalColorPicker';
import { BuggyComponent } from './examples/BuggyComponent';
import { ThemeSwapper } from './examples/ThemeSwapper';

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

export function App(): JSX.Element {
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
                                <IconTextField value={text} onChangeText={setText} placeholder='Placeholder...' marginBottom='m' />
                                <IconTextField value={text} onChangeText={setText} placeholder='Placeholder...' marginBottom='m' />
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
                                <TextButton alignSelf='center' variant='successInteractiveColor' marginBottom='m'>
                                    Success Interactive Color with left icon
                                </TextButton>
                                <TextButton alignSelf='flex-end' variant='warningInteractiveColor' marginBottom='m'>
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
