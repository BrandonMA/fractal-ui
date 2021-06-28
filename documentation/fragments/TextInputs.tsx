import React, { useState } from 'react';
import {
    useTheme,
    Box,
    Button,
    Text,
    SearchBar,
    Popover,
    TextField,
    TextFieldMask,
    IconTextField,
    Picker,
    DatePicker,
    TimePicker,
    AutoComplete,
    CircularIconButton,
    MessageInput,
    SearchIcon,
    FilterIcon,
    Layer
} from '../../src';
import { HorizontalLayer } from '../../src/components/containers/HorizontalLayer';

function PopoverContent(): JSX.Element {
    return (
        <Box width={120}>
            <Button variant={'alternative'} text={'Pasion'} />
        </Box>
    );
}

function SearchBarFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const deactivate = () => setActive(false);
    const toggleActive = () => setActive((active) => !active);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <SearchBar
                placeholder={'Search Bar'}
                buttonVariant={'main'}
                onChangeText={(text) => console.log(`New text ${text}`)}
                onSearch={(query: string) => console.log('Query: ', query)}
                marginBottom={spacings.m}
            />
            <SearchBar
                enableSearchButton
                placeholder={'Search Bar with button'}
                buttonVariant={'main'}
                onChangeText={(text) => console.log(`New text ${text}`)}
                onSearch={(query: string) => console.log('Query: ', query)}
                marginBottom={spacings.m}
            />
            <HorizontalLayer>
                <SearchBar
                    enableSearchButton
                    placeholder={'Search Bar with button and other component'}
                    buttonVariant={'main'}
                    flex={1}
                    onChangeText={(text) => console.log(`New text ${text}`)}
                    onSearch={(query: string) => console.log('Query: ', query)}
                />
                <Popover active={active} onRequestClose={deactivate} popoverChildren={() => <PopoverContent />}>
                    {(ref) => (
                        <CircularIconButton ref={ref} onPress={toggleActive} variant={'success'} marginLeft={spacings.s}>
                            {(color) => <FilterIcon height={24} width={24} fill={color} />}
                        </CircularIconButton>
                    )}
                </Popover>
            </HorizontalLayer>
        </Box>
    );
}

function AutocompleteFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const deactivate = () => setActive(false);
    const toggleActive = () => setActive((active) => !active);

    interface Film {
        id: string;
        title: string;
        year: number;
    }

    const top20Films: Array<Film> = [
        { id: '1', title: 'The Shawshank Redemption', year: 1994 },
        { id: '2', title: 'The Godfather', year: 1972 },
        { id: '3', title: 'The Godfather: Part II', year: 1974 },
        { id: '4', title: 'The Dark Knight', year: 2008 },
        { id: '5', title: '12 Angry Men', year: 1957 },
        { id: '6', title: "Schindler's List", year: 1993 },
        { id: '7', title: 'Pulp Fiction', year: 1994 },
        { id: '8', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { id: '9', title: 'The Good, the Bad and the Ugly', year: 1966 },
        { id: '10', title: 'Fight Club', year: 1999 },
        { id: '11', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { id: '12', title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { id: '13', title: 'Forrest Gump', year: 1994 },
        { id: '14', title: 'Inception', year: 2010 },
        { id: '15', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { id: '16', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { id: '17', title: 'Goodfellas', year: 1990 },
        { id: '18', title: 'The Matrix', year: 1999 },
        { id: '19', title: 'Seven Samurai', year: 1954 },
        { id: '20', title: 'Star Wars: Episode IV - A New Hope', year: 1977 }
    ];

    const handleSelect = (option: Film | Film[]) => {
        console.log('onSelectFilm: ', option);
    };

    return (
        <Box marginTop={spacings.m} marginBottom={spacings.m}>
            <AutoComplete
                placeholder={'Escribe aquí'}
                options={top20Films}
                onChangeText={(text) => console.log(`New text is ${text}`)}
                getOptionLabel={(option) => option.title}
                onSelect={handleSelect}
            />
            <Layer height={spacings.m} />
            <HorizontalLayer>
                <Layer flex={1}>
                    <AutoComplete
                        placeholder={'AutoComplete and other component'}
                        options={top20Films}
                        onChangeText={(text) => console.log(`New text is ${text}`)}
                        getOptionLabel={(option) => option.title}
                        onSelect={handleSelect}
                    />
                </Layer>
                <Popover active={active} onRequestClose={deactivate} popoverChildren={() => <PopoverContent />}>
                    {(ref) => (
                        <CircularIconButton ref={ref} onPress={toggleActive} variant={'success'} marginLeft={spacings.s}>
                            {(color) => <FilterIcon height={24} width={24} fill={color} />}
                        </CircularIconButton>
                    )}
                </Popover>
            </HorizontalLayer>
        </Box>
    );
}

function MessageInputFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <MessageInput onSend={(message: string) => console.log('Message: ', message)} placeholder='Escribe aquí' />
        </Box>
    );
}

function TextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <TextField placeholder='Escribe aquí' />
        </Box>
    );
}

function TextFieldMaskFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <TextFieldMask
                type={'money'}
                placeholder={'Monto'}
                marginBottom={spacings.s}
                onChangeText={(maskedText, rawText) => console.log({ maskedText, rawText })}
            />
            <TextFieldMask
                type={'phone'}
                placeholder={'Numero telefono'}
                onChangeText={(maskedText, rawText) => console.log({ maskedText, rawText })}
            />
        </Box>
    );
}

function IconTextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    const renderSearchIcon = React.useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <IconTextField leftImage={renderSearchIcon} placeholder='Escribe aquí' marginBottom={spacings.s} />
            <IconTextField rightImage={renderSearchIcon} placeholder='Escribe aquí' />
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
                marginBottom={spacings.s}
            />
            <Picker
                iosDoneText='Done'
                items={[
                    ['1', 'Hoy'],
                    ['2', 'Ayer'],
                    ['3', 'Prueba ( deshabilitado / disabled )'],
                    ['4', 'Cuatro'],
                    ['5', 'Cinco']
                ]}
                defaultValue={'3'}
                disabled
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

export function TextInputsFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Search Bar Example</Text>
            <SearchBarFragment />
            <Text variant={'title'}>Autocomplete Example</Text>
            <AutocompleteFragment />
            <Text variant={'title'}>Message Input Example</Text>
            <MessageInputFragment />
            <Text variant={'title'}>Text Field Example</Text>
            <TextFieldFragment />
            <Text variant={'title'}>Text Field Mask Example</Text>
            <TextFieldMaskFragment />
            <Text variant={'title'}>Icon Text Field Example</Text>
            <IconTextFieldFragment />
            <Text variant={'title'}>Picker Example</Text>
            <PickerFragment />
            <Text variant={'title'}>Date Picker Example</Text>
            <DatePickerFragment />
            <Text variant={'title'}>Time Picker Example</Text>
            <TimePickerFragment />
        </>
    );
}
