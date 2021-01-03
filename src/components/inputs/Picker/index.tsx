import React, { memo, useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { HorizontalView } from '../../containers/HorizontalView';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BasePicker } from '../../baseComponents/BasePicker';
import { BaseBox } from '../../baseComponents/BaseBox';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Platform } from 'react-native';

const Entypo = memo(BaseEntypo);

const style: any = {
    appearance: 'none',
    cursor: 'pointer'
};

export function Picker(props: PickerProps): JSX.Element {
    const { items, onChange, disabled, ...others } = props;
    const [currentValue, handleValueChange] = usePickerState(items, onChange);
    const theme = useTheme<FractalTheme>();

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <NativePicker.Item color={theme.colors.black} label={label} value={value} key={value} />;
        },
        [theme.colors.black]
    );

    return (
        <HorizontalView
            justifyContent='center'
            paddingHorizontal='s'
            borderRadius='textFieldRadius'
            height={theme.interactiveItems.textFieldHeight}
            backgroundColor='textFieldColor'
            pointerEvents={disabled ? 'none' : 'auto'}
            {...others}
        >
            <BasePicker
                borderWidth='0'
                backgroundColor='transparent'
                color='textColor'
                selectedValue={currentValue}
                dropdownIconColor={theme.colors.placeholderColor}
                onValueChange={handleValueChange}
                mode='dropdown'
                fontSize={14}
                flexGrow={1}
                style={Platform.OS === 'web' ? style : undefined}
            >
                {items.map(renderItem)}
            </BasePicker>
            <BaseBox alignSelf='center'>
                <Entypo selectable={false} name='chevron-down' size={21} color={theme.colors.placeholderColor} />
            </BaseBox>
        </HorizontalView>
    );
}
