import React, { useEffect, useState } from 'react';
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
    DetailsRow,
    TextFieldMask,
    Chip
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { BuggyComponent } from './examples/BuggyComponent';
import { ThemeSwapper } from './examples/ThemeSwapper';
import { AudioPlayer } from './src/components/AudioPlayer';
import { FilterIcon } from './src/assets/FilterIcon';
import { TrashIcon } from './src/assets/TrashIcon';
import { LoadIcon } from './src/assets/LoadIcon';
import { FileIcon } from './src/assets/FileIcon';

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

function AudioPlayerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return <AudioPlayer tracks={tracks} marginTop={spacings.s} marginBottom={spacings.xl} />;
}

function SwapThemeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ThemeSwapper />
        </Box>
    );
}

function ButtonContentFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant={'content'} text='Button with content variant' />
        </Box>
    );
}

function DropZoneFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Dropzone onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)} />
        </Box>
    );
}

function Chipfragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Chip marginRight={spacings.s} text={'Grupo A'} />
            <Chip marginRight={spacings.s}>
                <FileIcon height={24} width={24} fill={colors.black} />
            </Chip>
            <Chip marginRight={spacings.s} text={'Ver reportes'} />
        </Layer>
    );
}

function CrossButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box alignContent={'center'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <CrossButton />
        </Box>
    );
}

function ActivityIndicatorFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const width = 25;
    const height = 25;
    const marginRight = 10;

    return (
        <Box alignContent={'center'} flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <ActivityIndicator width={width} height={height} color={colors.mainInteractiveColor} marginRight={marginRight} />
            <ActivityIndicator width={width} height={height} color={colors.alternativeInteractiveColor} marginRight={marginRight} />
            <ActivityIndicator width={width} height={height} color={colors.successInteractiveColor} marginRight={marginRight} />
            <ActivityIndicator width={width} height={height} color={colors.warningInteractiveColor} marginRight={marginRight} />
            <ActivityIndicator width={width} height={height} color={colors.dangerInteractiveColor} marginRight={marginRight} />
            <ActivityIndicator width={width} height={height} color={colors.contentInteractiveColor} marginRight={marginRight} />
        </Box>
    );
}

function CircularIconButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
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
    );
}

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

function SegmentedControlFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
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
    );
}

function SliderFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderValue = (value: number) => setSliderValue(value);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Slider onSlidingComplete={handleSliderValue} minimumValue={0} maximumValue={100} />
            <Text variant={'normal'}>{`Value: ${sliderValue}`}</Text>
        </Box>
    );
}

function SwitchFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
        </Box>
    );
}

function CheckBoxFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label={'Selectable'} />
        </Box>
    );
}

function RadioFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <RadioGroup
                radioButtons={[
                    { value: '1', label: 'Option One' },
                    { value: '2', label: 'Option Two' }
                ]}
                onValueChange={(value: string) => console.log(value)}
            />
        </Box>
    );
}

function BubbleFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
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

function BoxAnimatedFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box
            height={100}
            width={100}
            initial={'initial'}
            animate={'visible'}
            variants={styleVariants}
            marginTop={spacings.s}
            marginBottom={spacings.xl}
        />
    );
}

function TextFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'title'} marginBottom={spacings.s}>
                Title text.
            </Text>
            <Text variant={'title2'} marginBottom={spacings.s}>
                Title2 text.
            </Text>
            <Text variant={'title3'} marginBottom={spacings.s}>
                Title3 text.
            </Text>
            <Text variant={'subtitle'} marginBottom={spacings.s}>
                Subtitle text.
            </Text>
            <Text variant={'placeholder'} marginBottom={spacings.s}>
                Placeholder text.
            </Text>
            <Text variant={'normal'} marginBottom={spacings.s}>
                Normal text.
            </Text>
            <Text variant={'label'} marginBottom={spacings.s}>
                Label text..
            </Text>
            <Text variant={'small'} marginBottom={spacings.s}>
                Small text.
            </Text>
            <Text variant={'smallLabel'} marginBottom={spacings.s}>
                Small label text.
            </Text>
            <Text variant={'button'} marginBottom={spacings.s}>
                Button text.
            </Text>
            <Text variant={'textButton'} marginBottom={spacings.s}>
                Text button text.
            </Text>
            <Text variant={'normal'} selectable marginBottom={spacings.s}>
                Selectable text.
            </Text>
            <Text variant={'normal'} selectable selectionColor={colors.alternativeInteractiveColor} marginBottom={spacings.s}>
                Selectable text with different color (Only on Android).
            </Text>
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

function SeparatorsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'normal'} marginBottom={spacings.s}>
                Below is the separator that is more visible with the isAtBackgroundLevel variable
            </Text>
            <Separator isAtBackgroundLevel marginBottom={spacings.s} />
            <Text variant={'normal'} marginBottom={spacings.s}>
                Below is the separator that is less visible without the isAtBackgroundLevel variable
            </Text>
            <Separator marginBottom={spacings.s} />
            <Text variant={'normal'}>Some text.</Text>
        </Box>
    );
}

function TextButtonFragment(): JSX.Element {
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

function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
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
    );
}

function TextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer marginBottom={spacings.xl}>
            <Text variant={'title'} marginBottom={spacings.s}>
                Text Field Example
            </Text>
            <Box marginBottom={spacings.xl}>
                <TextField placeholder='Escribe aquí' />
            </Box>
            <Text variant={'title'} marginBottom={spacings.s}>
                Text Field Mask Example
            </Text>
            <Box>
                <TextFieldMask
                    type={'money'}
                    placeholder={'Monto'}
                    onChangeText={(maskedText, rawText) => console.log({ maskedText, rawText })}
                />
            </Box>
        </Layer>
    );
}

function IconTextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <SearchBar placeholder='Escribe aquí' />
        </Box>
    );
}

function PickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
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
    );
}

function DatePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <DatePicker iosDoneText='Done' onChange={(date) => console.log('Local Date: ', date.toLocaleDateString())} />
        </Box>
    );
}

function TimePickerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <TimePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
        </Box>
    );
}

function BlurredModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [blurredModalVisible, setBlurredModalVisible] = useState(false);
    const toggleBlurredModal = () => setBlurredModalVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant='main' text='Show Blurred Modal' onPress={toggleBlurredModal} />
            <BlurrediOSModal visible={blurredModalVisible} dismissText={'Done'} onDismiss={toggleBlurredModal}>
                <Box margin={spacings.m}>
                    <Button variant='warning' text='Dismiss Modal' onPress={toggleBlurredModal} />
                </Box>
            </BlurrediOSModal>
        </Box>
    );
}

function MiddleCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);
    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
            <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                <Box>
                    <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                </Box>
            </MiddleCellModal>
        </Box>
    );
}

function ErrorMessageFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ErrorMessage onError={logErrorToService}>
                <BuggyComponent />
            </ErrorMessage>
        </Box>
    );
}

function PopoverContent(): JSX.Element {
    return (
        <Box width={'100%'}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);
    const togglePopover = () => setPopoverVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl} alignItems='center'>
            <Popover
                placement={'bottom'}
                active={popoverVisible}
                onRequestClose={() => setPopoverVisible(false)}
                popoverChildren={PopoverContent}
            >
                <Button variant={'main'} width={220} onPress={togglePopover} text={'Popover'} />
            </Popover>
        </Box>
    );
}

function DetailsListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <TableContainer
            label='2'
            title='Title'
            titleColorVariant='warning'
            labelColorVariant='warning'
            marginTop={spacings.s}
            marginBottom={spacings.xl}
        >
            {detailsCardContent.map((item, index) => {
                const isLastItem = index === detailsCardContent.length - 1;
                return <DetailsRow key={item[0]} title={item[0]} details={item[1]} addSeparator={!isLastItem} />;
            })}
        </TableContainer>
    );
}

function GridListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <GridList
            data={['One', 'Two', 'Three', 'Four']}
            numColumns={2}
            backgroundColor={colors.warningInteractiveColor}
            marginTop={spacings.s}
            marginBottom={spacings.xl}
            renderItem={() => <Box margin={4} height={60} minWidth={30} />}
        />
    );
}

function GridFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box height={300} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Grid>
                <GridColumn backgroundColor={colors.dangerInteractiveColor300} />
                <GridColumn>
                    <GridRow backgroundColor={colors.warningInteractiveColor300} />
                    <GridRow backgroundColor={colors.mainInteractiveColor300} />
                </GridColumn>
            </Grid>
        </Box>
    );
}

function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return <SocialMediaButtons marginTop={spacings.s} marginBottom={spacings.xl} />;
}

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <Text variant={'title'}>Audio Player</Text>
            <AudioPlayerFragment />
            <Text variant={'title'}>Swap Theme</Text>
            <SwapThemeFragment />
            <Text variant={'title'}>Button Content Example</Text>
            <ButtonContentFragment />
            <Text variant={'title'}>Dropzone Example</Text>
            <DropZoneFragment />
            <Text variant={'title'}>Chip Example</Text>
            <Chipfragment />
            <Text variant={'title'}>Cross Button Example</Text>
            <CrossButtonFragment />
            <Text variant={'title'}>Activity Indicator Example</Text>
            <ActivityIndicatorFragment />
            <Text variant={'title'}>Circular Icon Button Example</Text>
            <CircularIconButtonFragment />
            <Text variant={'title'}>Avatar and Image Example</Text>
            <AvatarImageFragment />
            <Text variant={'title'}>ImageBackground Example</Text>
            <ImageBackgroundFragment />
            <Text variant={'title'}>Button Group Example</Text>
            <SegmentedControlFragment />
            <Text variant={'title'}>Slider Example</Text>
            <SliderFragment />
            <Text variant={'title'}>Switch Example</Text>
            <SwitchFragment />
            <Text variant={'title'}>Check Box Example</Text>
            <CheckBoxFragment />
            <Text variant={'title'}>Radio Example</Text>
            <RadioFragment />
            <Text variant={'title'}>Bubble Example</Text>
            <BubbleFragment />
            <Text variant={'title'}>Layer Animated Example</Text>
            <LayerAnimatedFragment />
            <Text variant={'title'}>Box Animated Example</Text>
            <BoxAnimatedFragment />
            <Text variant={'title'}>Text Example</Text>
            <TextFragment />
            <Text variant={'title'}>Box Example</Text>
            <BoxContentFragment />
            <Text variant={'title'}>Separator Example</Text>
            <SeparatorsFragment />
            <Text variant={'title'}>Text Button Example</Text>
            <TextButtonFragment />
            <Text variant={'title'}>Color Picker Example</Text>
            <ColorPickerFragment />
            <TextFieldFragment />
            <Text variant={'title'}>Icon Text Field Example</Text>
            <IconTextFieldFragment />
            <Text variant={'title'}>Picker Example</Text>
            <PickerFragment />
            <Text variant={'title'}>Date Picker Example</Text>
            <DatePickerFragment />
            <Text variant={'title'}>Time Picker Example</Text>
            <TimePickerFragment />
            <Text variant={'title'}>Blurred Modal Example</Text>
            <BlurredModalFragment />
            <Text variant={'title'}>Middle Cell Modal Example</Text>
            <MiddleCellModalFragment />
            <Text variant={'title'}>Error Message Example</Text>
            <ErrorMessageFragment />
            <Text variant={'title'}>PopoverView Example</Text>
            <PopoverFragment />
            <Text variant={'title'}>Details List Example</Text>
            <DetailsListFragment />
            <Text variant={'title'}>Grid List Example</Text>
            <GridListFragment />
            <Text variant={'title'}>Grid Example</Text>
            <GridFragment />
            <Text variant={'title'}>Social Media Buttons</Text>
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
