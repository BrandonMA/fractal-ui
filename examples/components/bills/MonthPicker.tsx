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

export function MonthPicker(): JSX.Element {
    const [month, setMonth] = useState('Enero');
    const handleChangeMonth = useCallback((itemValue) => setMonth(itemValue.toString()), []);

    return (
        <PickerContainer title='Mes del pago:'>
            <StyledPicker selectedValue={month} onValueChange={handleChangeMonth} itemStyle={{ height: getHeight() }}>
                <Picker.Item label='Enero' value='Enero' />
                <Picker.Item label='Febrero' value='Febrero' />
                <Picker.Item label='Marzo' value='Marzo' />
                <Picker.Item label='Abril' value='Abril' />
                <Picker.Item label='Mayo' value='Mayo' />
                <Picker.Item label='Junio' value='Junio' />
                <Picker.Item label='Julio' value='Julio' />
                <Picker.Item label='Agosto' value='Agosto' />
                <Picker.Item label='Septiembre' value='Septiembre' />
                <Picker.Item label='Octubre' value='Octubre' />
                <Picker.Item label='Noviembre' value='Noviembre' />
                <Picker.Item label='Diciembre' value='Diciembre' />
            </StyledPicker>
        </PickerContainer>
    );
}
