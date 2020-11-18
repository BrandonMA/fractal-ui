import React, { useCallback, useState } from 'react';
import { PickerContainer } from '../PickerContainer';
import { getHeight } from './util/getHeight';
import { Picker, PickerItem } from '../Picker';

export function YearPicker(): JSX.Element {
    const [year, setYear] = useState('2020');
    const handleChangeYear = useCallback((itemValue) => setYear(itemValue.toString()), []);

    return (
        <PickerContainer title='Año del pago:'>
            <Picker selectedValue={year} onValueChange={handleChangeYear} itemStyle={{ height: getHeight() }}>
                <PickerItem label='2017' value='2017' />
                <PickerItem label='2018' value='2018' />
                <PickerItem label='2019' value='2019' />
                <PickerItem label='2020' value='2020' />
            </Picker>
        </PickerContainer>
    );
}
