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
    TableContainer,
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
    CircularIconButton,
    Dropzone,
    DetailsRow
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { BuggyComponent } from './examples/BuggyComponent';
import { ThemeSwapper } from './examples/ThemeSwapper';
import { AudioPlayer } from './src/components/AudioPlayer';
import { FilterIcon } from './src/assets/FilterIcon';
import { TrashIcon } from './src/assets/TrashIcon';
import { LoadIcon } from './src/assets/LoadIcon';
import { TableExample } from './examples/TableExample';

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

function AudioPlayerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Audio Player
            </Text>
            <AudioPlayer tracks={tracks} marginBottom={spacings.xl} />
        </React.Fragment>
    );
}

function SwapThemeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Swap Theme
            </Text>
            <Box marginBottom={spacings.xl}>
                <ThemeSwapper />
            </Box>
        </React.Fragment>
    );
}

function ButtonContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Button Content Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Button variant={'content'} text='Button with content variant' />
            </Box>
        </React.Fragment>
    );
}

function DropZoneFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Dropzone Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Dropzone onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)} />
            </Box>
        </React.Fragment>
    );
}

function TableExampleFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Table Example
            </Text>
            <TableExample />
        </React.Fragment>
    );
}

function CrossButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Cross Button Example
            </Text>
            <Box alignContent={'center'} marginBottom={spacings.xl}>
                <CrossButton />
            </Box>
        </React.Fragment>
    );
}

function ActivityIndicatorFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    const width = 25;
    const height = 25;
    const marginRight = 10;

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Activity Indicator Example
            </Text>
            <Box alignContent={'center'} flexDirection={'row'} marginBottom={spacings.xl}>
                <ActivityIndicator width={width} height={height} color={colors.mainInteractiveColor} marginRight={marginRight} />
                <ActivityIndicator width={width} height={height} color={colors.alternativeInteractiveColor} marginRight={marginRight} />
                <ActivityIndicator width={width} height={height} color={colors.successInteractiveColor} marginRight={marginRight} />
                <ActivityIndicator width={width} height={height} color={colors.warningInteractiveColor} marginRight={marginRight} />
                <ActivityIndicator width={width} height={height} color={colors.dangerInteractiveColor} marginRight={marginRight} />
                <ActivityIndicator width={width} height={height} color={colors.contentInteractiveColor} marginRight={marginRight} />
            </Box>
        </React.Fragment>
    );
}

function CircularIconButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Circular Icon Button Example
            </Text>
            <Box flexDirection={'row'} marginBottom={spacings.xl}>
                <CircularIconButton variant={'main'} marginRight={spacings.m}>
                    {(variantColor: string) => <LoadIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
                <CircularIconButton variant={'success'} marginRight={spacings.m}>
                    {(variantColor: string) => <FilterIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
                <CircularIconButton variant={'danger'} marginRight={spacings.m}>
                    {(variantColor: string) => <TrashIcon height={24} width={24} fill={variantColor} />}
                </CircularIconButton>
            </Box>
        </React.Fragment>
    );
}

function AvatarImageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Avatar and Image Example
            </Text>
            <Box flexDirection={'row'} marginBottom={spacings.xl}>
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
        </React.Fragment>
    );
}

function ImageBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                ImageBackground Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
        </React.Fragment>
    );
}

function SegmentedControlFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Button Group Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
            </Box>
        </React.Fragment>
    );
}

function SliderFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderValue = (value: number) => setSliderValue(value);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Slider Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Slider onSlidingComplete={handleSliderValue} minimumValue={0} maximumValue={100} />
                <Text variant={'normal'}>{`Value: ${sliderValue}`}</Text>
            </Box>
        </React.Fragment>
    );
}

function SwitchFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Switch Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
            </Box>
        </React.Fragment>
    );
}

function CheckBoxFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Check Box Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label={'Selectable'} />
            </Box>
        </React.Fragment>
    );
}

function RadioFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Radio Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <RadioGroup
                    radioButtons={[
                        { value: '1', label: 'Option One' },
                        { value: '2', label: 'Option Two' }
                    ]}
                    onValueChange={(value: string) => console.log(value)}
                />
            </Box>
        </React.Fragment>
    );
}

function BubbleFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Bubble Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
        </React.Fragment>
    );
}

function LayerAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [layerVariant, setLayerVariant] = useState('layerVisible');

    const toggleVariant = () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'layerInitial' : 'layerVisible'));

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Layer Animated Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
            </Box>
        </React.Fragment>
    );
}

function BoxAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Box Animated Example
            </Text>
            <Box height={100} width={100} initial={'initial'} animate={'visible'} variants={styleVariants} marginBottom={spacings.xl} />
        </React.Fragment>
    );
}

function TextFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Text Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Text variant={'title'} marginBottom={spacings.xs}>
                    Title text.
                </Text>
                <Text variant={'title2'} marginBottom={spacings.xs}>
                    Title2 text.
                </Text>
                <Text variant={'title3'} marginBottom={spacings.xs}>
                    Title3 text.
                </Text>
                <Text variant={'subtitle'} marginBottom={spacings.xs}>
                    Subtitle text.
                </Text>
                <Text variant={'placeholder'} marginBottom={spacings.xs}>
                    Placeholder text.
                </Text>
                <Text variant={'normal'} marginBottom={spacings.xs}>
                    Normal text.
                </Text>
                <Text variant={'label'} marginBottom={spacings.xs}>
                    Label text..
                </Text>
                <Text variant={'small'} marginBottom={spacings.xs}>
                    Small text.
                </Text>
                <Text variant={'smallLabel'} marginBottom={spacings.xs}>
                    Small label text.
                </Text>
                <Text variant={'button'} marginBottom={spacings.xs}>
                    Button text.
                </Text>
                <Text variant={'textButton'} marginBottom={spacings.xs}>
                    Text button text.
                </Text>
                <Text variant={'normal'} selectable marginBottom={spacings.xs}>
                    Selectable text.
                </Text>
                <Text variant={'normal'} selectable selectionColor={colors.alternativeInteractiveColor} marginBottom={spacings.xs}>
                    Selectable text with different color (Only on Android).
                </Text>
            </Box>
        </React.Fragment>
    );
}

function BoxContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Box Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Text variant={'normal'} marginBottom={spacings.m}>
                    Use it to separate your components into blocks.
                </Text>
                <Separator marginBottom={spacings.m} />
                <Text variant={'normal'}>Like this.</Text>
            </Box>
        </React.Fragment>
    );
}

function SeparatorsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Separator Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Text variant={'normal'} marginBottom={spacings.m}>
                    Below is the separator that is more visible with the isAtBackgroundLevel variable
                </Text>
                <Separator isAtBackgroundLevel marginBottom={spacings.m} />
                <Text variant={'normal'} marginBottom={spacings.m}>
                    Below is the separator that is less visible without the isAtBackgroundLevel variable
                </Text>
                <Separator marginBottom={spacings.m} />
                <Text variant={'normal'}>Some text.</Text>
            </Box>
        </React.Fragment>
    );
}

function TextButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Text Button Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <TextButton variant={'main'} marginBottom={spacings.m}>
                    Main
                </TextButton>
                <TextButton variant={'alternative'} marginBottom={spacings.m}>
                    Alternative
                </TextButton>
                <TextButton variant={'success'} marginBottom={spacings.m}>
                    Success
                </TextButton>
                <TextButton variant={'warning'} marginBottom={spacings.m}>
                    Warning
                </TextButton>
                <TextButton variant={'danger'}>Danger</TextButton>
            </Box>
        </React.Fragment>
    );
}

function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Color Picker Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
        </React.Fragment>
    );
}

function TextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Text Field Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <TextField placeholder='Escribe aquí' />
            </Box>
        </React.Fragment>
    );
}

function IconTextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Icon Text Field Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <SearchBar placeholder='Escribe aquí' />
            </Box>
        </React.Fragment>
    );
}

function PickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Picker Example
            </Text>
            <Box marginBottom={spacings.xl}>
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
        </React.Fragment>
    );
}

function DatePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Date Picker Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <DatePicker iosDoneText='Done' onChange={(date) => console.log('Local Date: ', date.toLocaleDateString())} />
            </Box>
        </React.Fragment>
    );
}

function TimePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Time Picker Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <TimePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
            </Box>
        </React.Fragment>
    );
}

function BlurredModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);

    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Blurred Modal Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Button variant='main' text='Show Blurred Modal' onPress={toggleBlurredModal} />
                <BlurrediOSModal visible={blurredModalVisible} dismissText={'Done'} onDismiss={toggleBlurredModal}>
                    <Box margin={spacings.m}>
                        <Button variant='warning' text='Dismiss Modal' onPress={toggleBlurredModal} />
                    </Box>
                </BlurrediOSModal>
            </Box>
        </React.Fragment>
    );
}

function MiddleCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);

    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Middle Cell Modal Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
                <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                    <Box>
                        <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                    </Box>
                </MiddleCellModal>
            </Box>
        </React.Fragment>
    );
}

function ErrorMessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Error Message Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <ErrorMessage onError={logErrorToService}>
                    <BuggyComponent />
                </ErrorMessage>
            </Box>
        </React.Fragment>
    );
}

function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);

    const togglePopover = () => setPopoverVisible((currentValue) => !currentValue);

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                PopoverView Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <Popover
                    active={popoverVisible}
                    popoverChildren={() => {
                        return <PopoverContainer />;
                    }}
                >
                    <Button variant={'main'} onPress={togglePopover} text={'Popover'} marginBottom={spacings.m} />
                </Popover>
            </Box>
        </React.Fragment>
    );
}

function DetailsListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Details List Example
            </Text>
            <TableContainer title='Title' titleColorVariant='warning' label='2' labelColorVariant='warning' marginBottom={spacings.m}>
                {detailsCardContent.map((item, index) => {
                    const isLastItem = index === detailsCardContent.length - 1;
                    return <DetailsRow key={item[0]} title={item[0]} details={item[1]} addSeparator={!isLastItem} />;
                })}
            </TableContainer>
        </React.Fragment>
    );
}

function GridListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Grid List Example
            </Text>
            <GridList
                backgroundColor={colors.warningInteractiveColor}
                data={['One', 'Two', 'Three', 'Four']}
                renderItem={() => <Box margin={4} height={60} minWidth={30} />}
                numColumns={2}
                marginBottom={spacings.xl}
            />
        </React.Fragment>
    );
}

function GridFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Grid Example
            </Text>
            <Box height={300} marginBottom={spacings.xl}>
                <Grid>
                    <GridColumn backgroundColor={colors.dangerInteractiveColor300} />
                    <GridColumn>
                        <GridRow backgroundColor={colors.warningInteractiveColor300} />
                        <GridRow backgroundColor={colors.mainInteractiveColor300} />
                    </GridColumn>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <React.Fragment>
            <Text variant={'title'} marginBottom={spacings.m}>
                Social Media Buttons
            </Text>
            <SocialMediaButtons />
        </React.Fragment>
    );
}

function Content(): JSX.Element {
    // const [visible, setVisible] = useState(false);
    // const toggleVisible = useCallback(() => setVisible((currentValue) => !currentValue), []);

    // const [bottomCellVisible, setBottomCellVisible] = useState(false);
    // const toggleBottomCell = useCallback(() => setBottomCellVisible((currentValue) => !currentValue), []);

    return (
        <PaddingLayer>
            <AudioPlayerFragment />
            <SwapThemeFragment />
            <ButtonContentFragment />
            <DropZoneFragment />
            <TableExampleFragment />
            <CrossButtonFragment />
            <ActivityIndicatorFragment />
            <CircularIconButtonFragment />
            <AvatarImageFragment />
            <ImageBackgroundFragment />
            <SegmentedControlFragment />
            <SliderFragment />
            <SwitchFragment />
            <CheckBoxFragment />
            <RadioFragment />
            <BubbleFragment />
            <LayerAnimatedFragment />
            <BoxAnimatedFragment />
            <TextFragment />
            <BoxContentFragment />
            <SeparatorsFragment />
            <TextButtonFragment />
            <ColorPickerFragment />
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
            <TextFieldFragment />
            <IconTextFieldFragment />
            <PickerFragment />
            <DatePickerFragment />
            <TimePickerFragment />
            <BlurredModalFragment />
            <MiddleCellModalFragment />
            <ErrorMessageFragment />
            <PopoverFragment />
            <DetailsListFragment />
            <GridListFragment />
            <GridFragment />
            <SocialMediaButtonsFragment />
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
