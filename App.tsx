import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import {
    ActivityIndicator,
    Background,
    Box,
    Button,
    CheckBox,
    Chip,
    ColorPicker,
    Dropzone,
    FractalAppRoot,
    Layer,
    PaddingLayer,
    Popover,
    RadioGroup,
    SegmentedControl,
    Separator,
    Slider,
    SocialMediaButtons,
    Switch,
    Text,
    useTheme,
    PlacementType,
    FileIcon
} from './src';
import { SafeAreaView, ScrollView } from 'react-native';
import { ThemeSwapper } from './documentation/examples/ThemeSwapper';
import { MultiSelectInputExample } from './documentation/examples/MultiSelectInputExample';
import { TextsFragments } from './documentation/fragments/Texts';
import { ContainersFragments } from './documentation/fragments/Containers';
import { ButtonsFragments } from './documentation/fragments/Buttons';
import { ImagesFragments } from './documentation/fragments/Images';
import { TextInputsFragments } from './documentation/fragments/TextInputs';
import { ModalsFragments } from './documentation/fragments/Modals';
import { MessagesFragments } from './documentation/fragments/Messages';
import { TablesFragments } from './documentation/fragments/Tables';
import { GridsFragments } from './documentation/fragments/Grids';

function SwapThemeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ThemeSwapper />
        </Box>
    );
}

function DropZoneFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
            <Box marginBottom={spacings.s}>
                <Dropzone onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)} />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone pick multiple files '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone with maximum number of files (5) '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    maxNumberFiles={5}
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone with maximum number of file sizes (100 kB) '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    maxFileSize={100000}
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
        </Layer>
    );
}

function Chipfragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Chip text={'Ver reportes'} marginRight={spacings.s} onCrossButtonPress={() => console.log('Cross button pressed')} />
            <Chip marginRight={spacings.s} onCrossButtonPress={() => console.log('Cross button pressed')}>
                <FileIcon height={24} width={24} fill={colors.text} />
            </Chip>
        </Layer>
    );
}

function ActivityIndicatorFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    const width = 25;
    const height = 25;

    return (
        <Box alignContent={'center'} flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <ActivityIndicator width={width} height={height} color={colors.mainInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.alternativeInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.successInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.warningInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.dangerInteractiveColor} marginRight={spacings.m} />
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
                values={['One', 'Two']}
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
            <Slider
                step={1}
                minimumValue={0}
                maximumValue={100}
                onSlidingComplete={handleSliderValue}
                onSlidingStart={() => console.log('Slide started')}
            />
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

function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const [selectedColor, setSelectedColor] = useState(colors.successInteractiveColor);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ColorPicker
                value={selectedColor}
                defaultValue={selectedColor}
                onColorChange={(color) => setSelectedColor(color)}
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

function PopoverContent(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.m} width={'100%'}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();

    const placements: Array<PlacementType> = ['top', 'bottom', 'left', 'right'];

    const [popoverVisible, setPopoverVisible] = useState(false);
    const [placement, setPlacement] = useState(placements[0]);

    const togglePopover = () => {
        setPopoverVisible((currentValue) => !currentValue);
    };

    const requestClose = () => {
        const index = placements.indexOf(placement);
        setPlacement(index + 1 < placements.length ? placements[index + 1] : placements[0]);
        setPopoverVisible(false);
    };

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl} alignItems='center'>
            <Popover placement={placement} active={popoverVisible} onRequestClose={requestClose} popoverChildren={() => <PopoverContent />}>
                {(ref) => <Button ref={ref} variant={'main'} width={220} onPress={togglePopover} text={'Popover'} />}
            </Popover>
        </Box>
    );
}

function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer marginTop={spacings.s} alignItems='center'>
            <SocialMediaButtons
                width={'100%'}
                marginTop={spacings.s}
                marginBottom={spacings.xl}
                onGooglePress={() => console.log('Google button pressed')}
                onFacebookPress={() => console.log('Facebook button pressed')}
                onApplePress={() => console.log('Apple button pressed')}
            />
            <Text variant={'normal'} alignItems={'center'}>
                Social Media Buttons without Apple button
            </Text>
            <SocialMediaButtons
                width={'100%'}
                removeAppleButton
                marginTop={spacings.s}
                marginBottom={spacings.xl}
                onGooglePress={() => console.log('Google button pressed')}
                onFacebookPress={() => console.log('Facebook button pressed')}
                onApplePress={() => console.log('Apple button pressed')}
            />
        </Layer>
    );
}

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <Text variant={'title'}>Swap Theme</Text>
            <SwapThemeFragment />
            <Text variant={'title'}>Dropzone Example</Text>
            <DropZoneFragment />
            <Text variant={'title'}>Chip Example</Text>
            <Chipfragment />
            <Text variant={'title'}>Multi Select Input Example</Text>
            <MultiSelectInputExample />
            <Text variant={'title'}>Activity Indicator Example</Text>
            <ActivityIndicatorFragment />
            <ImagesFragments />
            <Text variant={'title'}>Segmented Control Example</Text>
            <SegmentedControlFragment />
            <Text variant={'title'}>Slider Example</Text>
            <SliderFragment />
            <Text variant={'title'}>Switch Example</Text>
            <SwitchFragment />
            <Text variant={'title'}>Check Box Example</Text>
            <CheckBoxFragment />
            <Text variant={'title'}>Radio Example</Text>
            <RadioFragment />
            <TextsFragments />
            <ContainersFragments />
            <Text variant={'title'}>Separator Example</Text>
            <SeparatorsFragment />
            <ButtonsFragments />
            <Text variant={'title'}>Color Picker Example</Text>
            <ColorPickerFragment />
            <TextInputsFragments />
            <ModalsFragments />
            <MessagesFragments />
            <Text variant={'title'}>PopoverView Example</Text>
            <PopoverFragment />
            <TablesFragments />
            <GridsFragments />
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
