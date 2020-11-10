import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { PickerContainer } from './PickerContainer';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

function getHeight(): number {
    return Platform.OS === 'ios' ? 132 : 44;
}

const StyledPicker = styled(Picker)`
    height: ${getHeight()}px;
`;

export function YearPicker(): JSX.Element {
    const [year, setYear] = useState('2020');
    const handleChangeYear = useCallback((itemValue) => setYear(itemValue.toString()), []);

    return (
        <PickerContainer title='Año del pago:'>
            <StyledPicker selectedValue={year} onValueChange={handleChangeYear} itemStyle={{ height: getHeight() }}>
                <Picker.Item label='2017' value='2017' />
                <Picker.Item label='2018' value='2018' />
                <Picker.Item label='2019' value='2019' />
                <Picker.Item label='2020' value='2020' />
            </StyledPicker>
        </PickerContainer>
    );
}
