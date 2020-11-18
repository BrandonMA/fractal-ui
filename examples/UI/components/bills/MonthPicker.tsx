import React, { useCallback, useState } from 'react';
import { PickerContainer } from '../PickerContainer';
import { getHeight } from './util/getHeight';
import { Picker, PickerItem } from '../Picker';

export function MonthPicker(): JSX.Element {
    const [month, setMonth] = useState('Enero');
    const handleChangeMonth = useCallback((itemValue) => setMonth(itemValue.toString()), []);

    return (
        <PickerContainer title='Mes del pago:'>
            <Picker selectedValue={month} onValueChange={handleChangeMonth} itemStyle={{ height: getHeight() }}>
                <PickerItem label='Enero' value='Enero' />
                <PickerItem label='Febrero' value='Febrero' />
                <PickerItem label='Marzo' value='Marzo' />
                <PickerItem label='Abril' value='Abril' />
                <PickerItem label='Mayo' value='Mayo' />
                <PickerItem label='Junio' value='Junio' />
                <PickerItem label='Julio' value='Julio' />
                <PickerItem label='Agosto' value='Agosto' />
                <PickerItem label='Septiembre' value='Septiembre' />
                <PickerItem label='Octubre' value='Octubre' />
                <PickerItem label='Noviembre' value='Noviembre' />
                <PickerItem label='Diciembre' value='Diciembre' />
            </Picker>
        </PickerContainer>
    );
}
