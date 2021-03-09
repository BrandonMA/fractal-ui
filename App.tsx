import React, { useCallback, useState } from 'react';
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
    Message
} from './src';
import { useTheme } from './src/hooks/useTheme';
import { blue } from './src/colors/presets/blue';
import { SafeAreaView, ScrollView } from 'react-native';
import { TextButton } from './src/components/buttons/TextButton';
import { ColorBug } from './RedExample';
import { BugIcon } from './src/assets/BugIcon';

const renderErrorIcon = (color: string): JSX.Element => <BugIcon width={20} fill={color} />;

const styleVariants = {
    layerInitial: { scale: 0, opacity: 0, backgroundColor: blue.base100 },
    layerVisible: { scale: 1, opacity: 1, backgroundColor: blue.base },
    initial: { height: 15, width: 15, opacity: 0 },
    visible: { height: 100, width: 100, opacity: 1 }
};

function Content(): JSX.Element {
    const { spacings, colors } = useTheme();

    const [layerVariant, setLayerVariant] = useState('layerVisible');
    const toggleVariant = useCallback(
        () => setLayerVariant((currentValue) => (currentValue === 'layerVisible' ? 'layerInitial' : 'layerVisible')),
        []
    );

    // const [visible, setVisible] = useState(false);
    // const toggleVisible = useCallback(() => setVisible((currentValue) => !currentValue), []);

    const [middleCellVisible, setMiddleCellVisible] = useState(false);
    const toggleMiddleCell = useCallback(() => setMiddleCellVisible((currentValue) => !currentValue), []);

    // const [bottomCellVisible, setBottomCellVisible] = useState(false);
    // const toggleBottomCell = useCallback(() => setBottomCellVisible((currentValue) => !currentValue), []);

    return (
        <PaddingLayer>
            <ColorBug />
            <Text marginBottom={spacings.m} variant={'title'}>
                Layer Animated Example:
            </Text>
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
                <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
                <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                    <Box>
                        <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                    </Box>
                </MiddleCellModal>
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
                    initialValue={'3'}
                />
            </Box>
            <Separator isAtBackgroundLevel marginBottom={spacings.m} />
            <Text marginBottom={spacings.m} variant={'title'}>
                Date Picker Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <DatePicker iosDoneText='Done' onChange={(date) => console.log(date.toLocaleDateString())} />
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
                Message Example:
            </Text>
            <Box marginBottom={spacings.m}>
                <Message messageType={'danger'} title={'Message Title'} description={'Message description'} icon={renderErrorIcon} />
            </Box>
        </PaddingLayer>
    );
}

export function App(): JSX.Element {
    return (
        <FractalAppRoot>
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
