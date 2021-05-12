import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import {
    Background,
    Button,
    FractalAppRoot,
    Text,
    Box,
    PaddingLayer,
    Separator,
    Layer,
    ColorPicker,
    MiddleCellModal,
    TextField,
    SearchBar,
    Picker,
    DatePicker,
    TimePicker,
    ErrorMessage,
    DetailsList,
    Popover,
    Grid,
    GridList,
    GridColumn,
    GridRow,
    Switch,
    RadioGroup,
    CheckBox,
    SocialMediaButtons,
    TextButton,
    Slider,
    useTheme,
    ImageBackground,
    blue,
    SegmentedControl,
    Avatar,
    BlurrediOSModal,
    Bubble,
    Image,
    ActivityIndicator,
    CrossButton,
    CircularIconButton
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { BuggyComponent } from './examples/BuggyComponent';
import { ThemeSwapper } from './examples/ThemeSwapper';
import { AudioPlayer } from './src/components/AudioPlayer';
import { FilterIcon } from './src/assets/FilterIcon';
import { TrashIcon } from './src/assets/TrashIcon';
import { UploadIcon } from './src/assets/UploadIcon';

const styleVariants = {
    layerInitial: { scale: 0, opacity: 0, backgroundColor: blue.base100 },
    layerVisible: { scale: 1, opacity: 1, backgroundColor: blue.base },
    initial: { height: 15, width: 15, opacity: 0 },
    visible: { height: 100, width: 100, opacity: 1 }
};

const tracks = [
    {
        title: 'Rubber Robot',
        //artist: 'Podington Bear',
        audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
        image: 'https://picsum.photos/id/870/200/300'
        //color: 'lightblue'
    },
    {
        title: 'All Of Me',
        //artist: 'Mildred Bailey',
        audioSrc: 'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
        image: 'https://picsum.photos/id/872/200/300'
        //color: 'lightgreen'
    },
    {
        title: 'Instant Crush',
        //artist: 'Daft Punk ft. Julian Casablancas',
        audioSrc: require('./assets/song.mp3'),
        image: 'https://picsum.photos/id/875/200/300'
        //color: 'orange'
    }
];

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

function logErrorToService(error: Error, componentStack: string) {
    console.log('Log Error To Service: ', { error, componentStack });
}

function PopoverContainer(): JSX.Element {
    return (
        <Box width={'50%'} alignSelf='center'>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

function BlurredModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);

    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Button variant='main' text='Show Blurred Modal' onPress={toggleBlurredModal} />
            <BlurrediOSModal visible={blurredModalVisible} dismissText={'Done'} onDismiss={toggleBlurredModal}>
                <Box margin={spacings.m}>
                    <Button variant='warning' text='Dismiss Modal' onPress={toggleBlurredModal} />
                </Box>
            </BlurrediOSModal>
        </React.Fragment>
    );
}

function SegmentedControlFragment(): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <React.Fragment>
            <SegmentedControl
                selectedIndex={selectedIndex}
                values={['One', 'Two', 'Three', 'Four']}
                onChange={(value, index) => {
                    console.log(value);
                    setSelectedIndex(index);
                }}
                onValueChange={(value) => {
                    console.log('On Value Change: ', value);
                }}
            />
        </React.Fragment>
    );
}

function SliderFragment(): JSX.Element {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderValue = (value: number) => setSliderValue(value);

    return (
        <React.Fragment>
            <Slider onSlidingComplete={handleSliderValue} />
            <Text variant={'normal'}>{`Value: ${sliderValue}`}</Text>
        </React.Fragment>
    );
}

function SwitchFragment(): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <React.Fragment>
            <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
        </React.Fragment>
    );
}

function CheckBoxFragment(): JSX.Element {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <React.Fragment>
            <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label={'Selectable'} />
        </React.Fragment>
    );
}

function LayerAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [layerVariant, setLayerVariant] = useState('layerVisible');

    const toggleVariant = () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'layerInitial' : 'layerVisible'));

    return (
        <React.Fragment>
            <Layer
                height={100}
                width={100}
                initial={'layerInitial'}
                animate={layerVariant}
                variants={styleVariants}
                backgroundColor={'#FFF'}
                marginBottom={spacings.m}
            />
            <Button
                variant={'main'}
                alignSelf={'center'}
                width={268}
                marginBottom={spacings.m}
                text={'Toggle animation'}
                onPress={toggleVariant}
            />
        </React.Fragment>
    );
}

function MiddleCellModalFragment(): JSX.Element {
    const [middleCellVisible, setMiddleCellVisible] = useState(false);

    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
            <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                <Box>
                    <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                </Box>
            </MiddleCellModal>
        </React.Fragment>
    );
}

function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);

    const togglePopover = () => setPopoverVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Popover
                active={popoverVisible}
                popoverChildren={() => {
                    return <PopoverContainer />;
                }}
            >
                <Button variant={'main'} onPress={togglePopover} text={'Popover'} marginBottom={spacings.m} />
            </Popover>
        </React.Fragment>
    );
}

function Content(): JSX.Element {
    const { spacings, colors } = useTheme();

    // const [visible, setVisible] = useState(false);
    // const toggleVisible = useCallback(() => setVisible((currentValue) => !currentValue), []);

    // const [bottomCellVisible, setBottomCellVisible] = useState(false);
    // const toggleBottomCell = useCallback(() => setBottomCellVisible((currentValue) => !currentValue), []);

    return (
        <PaddingLayer>
            <CrossButton />
            <ActivityIndicator width={20} height={20} color={colors.mainInteractiveColor} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Audio Player
            </Text>
            <AudioPlayer tracks={tracks} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Swap Theme
            </Text>
            <Box marginBottom={spacings.m}>
                <ThemeSwapper />
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Avatar y Image Example
            </Text>
            <Box marginBottom={spacings.m} flexDirection={'row'}>
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
            <Text marginBottom={spacings.m} variant={'title'}>
                ImageBackground Example
            </Text>
            <Box marginBottom={spacings.m}>
                <ImageBackground
                    source={'https://picsum.photos/id/870/200/300'}
                    width={200}
                    height={200}
                    borderRadius={16}
                    justifyContent={'center'}
                >
                    <Text variant='button'>Lorem Ipsum is simply dummy text.</Text>
                </ImageBackground>
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Blurred Modal Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <BlurredModalFragment />
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Circular Icon Button
            </Text>
            <Box marginBottom={spacings.m} flexDirection={'row'}>
                <CircularIconButton variant={'main'} marginRight={spacings.m}>
                    {(variantColor: string) => <UploadIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
                <CircularIconButton variant={'success'} marginRight={spacings.m}>
                    {(variantColor: string) => <FilterIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
                <CircularIconButton variant={'danger'} marginRight={spacings.m}>
                    {(variantColor: string) => <TrashIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Button Group Example
            </Text>
            <Box marginBottom={spacings.m}>
                <SegmentedControlFragment />
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Slider Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <SliderFragment />
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Switch Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <SwitchFragment />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Radio Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <RadioGroup
                    radioButtons={[
                        { value: '1', label: 'Option One' },
                        { value: '2', label: 'Option Two' }
                    ]}
                    onValueChange={(value: string) => console.log(value)}
                />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Bubble Example:
            </Text>
            <Box>
                <Layer backgroundColor={colors.background} paddingTop={10} paddingBottom={10}>
                    <Bubble
                        arrowPosition={'left'}
                        color={colors.foreground}
                        onLongPress={() => console.log('On Long Press')}
                        onPress={() => console.log('on Press')}
                    >
                        <Text variant='normal'>Este es un mensaje dentro de una burbuja </Text>
                    </Bubble>
                    <Layer marginBottom={spacings.m} />
                    <Bubble arrowPosition={'right'} color={colors.mainInteractiveColor}>
                        <Text variant='normal' color={'white'}>
                            Este es un mensaje dentro de una burbuja
                        </Text>
                    </Bubble>
                </Layer>
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Check Box Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <CheckBoxFragment />
            </Box>
            <Text marginBottom={spacings.m} variant={'title'}>
                Layer Animated Example:
            </Text>
            <LayerAnimatedFragment />
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Box Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <Text variant={'normal'} marginBottom={spacings.m}>
                    Use it to separate your components into blocks.
                </Text>
                <Separator marginBottom={spacings.m} />
                <Text variant={'normal'}>Like this.</Text>
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Box Animated Example:
            </Text>
            <Box height={100} width={100} initial={'initial'} animate={'visible'} variants={styleVariants} marginBottom={spacings.m} />
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Text Button Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <TextButton marginBottom={spacings.m} variant={'main'}>
                    Main
                </TextButton>
                <TextButton marginBottom={spacings.m} variant={'alternative'}>
                    Alternative
                </TextButton>
                <TextButton marginBottom={spacings.m} variant={'success'}>
                    Success
                </TextButton>
                <TextButton marginBottom={spacings.m} variant={'warning'}>
                    Warning
                </TextButton>
                <TextButton variant={'danger'}>Danger</TextButton>
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Color Picker Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <ColorPicker
                    onColorChange={(color) => console.log(color)}
                    colors={[
                        colors.mainInteractiveColor,
                        colors.alternativeInteractiveColor,
                        colors.successInteractiveColor,
                        colors.dangerInteractiveColor,
                        colors.warningInteractiveColor
                    ]}
                />
            </Box>
            {/*<Separator isAtBackgroundLevel marginBottom={spacings.m} />*/}
            {/*<Text marginBottom={spacings.m} variant={'title'}>*/}
            {/*    Dimmed Modal Example:*/}
            {/*</Text>*/}
            {/*<Box marginBottom={spacings.m}>*/}
            {/*    <Button variant='main' text='Show Modal' onPress={toggleVisible} />*/}
            {/*    <DimmedModal visible={visible} onDismiss={toggleVisible}>*/}
            {/*        <Box>*/}
            {/*            <Button variant='warning' text='Dismiss Modal' onPress={toggleVisible} />*/}
            {/*        </Box>*/}
            {/*    </DimmedModal>*/}
            {/*</Box>*/}
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Middle Cell Modal Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <MiddleCellModalFragment />
            </Box>
            {/*<Separator isAtBackgroundLevel marginBottom={spacings.m} />*/}
            {/*<Text marginBottom={spacings.m} variant={'title'}>*/}
            {/*    Bottom Cell Modal Example:*/}
            {/*</Text>*/}
            {/*<Box marginBottom={spacings.m}>*/}
            {/*    <Button variant='main' text='Show Bottom Cell Modal' onPress={toggleBottomCell} />*/}
            {/*    <BottomCellModal visible={bottomCellVisible} onDismiss={toggleBottomCell}>*/}
            {/*        <Box>*/}
            {/*            <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleBottomCell} />*/}
            {/*        </Box>*/}
            {/*    </BottomCellModal>*/}
            {/*</Box>*/}
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Text Field Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <TextField placeholder='Escribe aquí' />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Icon Text Field Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <SearchBar placeholder='Escribe aquí' />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Picker Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <Picker
                    onChange={(value) => console.log(value)}
                    iosDoneText='Done'
                    items={[
                        ['1', 'Hoy'],
                        ['2', 'Ayer'],
                        ['3', 'Prueba'],
                        ['4', 'Cuatro'],
                        ['5', 'Cinco']
                    ]}
                    defaultValue={'3'}
                />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Date Picker Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <DatePicker iosDoneText='Done' onChange={(date) => console.log('Local Date: ', date.toLocaleDateString())} />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Time Picker Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <TimePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Error Message Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <ErrorMessage onError={logErrorToService}>
                    <BuggyComponent />
                </ErrorMessage>
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                PopoverView Example:
            </Text>
            <PopoverFragment />
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Details List Example:
            </Text>
            <DetailsList title='Title' titleColorVariant='warning' details={detailsCardContent} marginBottom={spacings.m} />
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Grid List Example:
            </Text>
            <GridList
                backgroundColor={colors.warningInteractiveColor}
                data={['One', 'Two', 'Three', 'Four']}
                renderItem={() => <Box margin={4} height={60} minWidth={30} />}
                numColumns={2}
                marginBottom={spacings.m}
            />
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Grid Example:
            </Text>
            <Box height={300} marginBottom={spacings.m}>
                <Grid>
                    <GridColumn backgroundColor={colors.dangerInteractiveColor300} />
                    <GridColumn>
                        <GridRow backgroundColor={colors.warningInteractiveColor300} />
                        <GridRow backgroundColor={colors.mainInteractiveColor300} />
                    </GridColumn>
                </Grid>
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Social Media Buttons:
            </Text>
            <SocialMediaButtons />
        </PaddingLayer>
    );
}

export function App(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <SafeAreaView />
                <ScrollView>
                    <Content />
                </ScrollView>
            </Background>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
