import React, { memo } from 'react';
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
    const { items, onChange, ...others } = props;
    const [currentValue, handleValueChange] = usePickerState(items, onChange);
    const theme = useTheme<FractalTheme>();

    return (
        <HorizontalView
            justifyContent='center'
            paddingHorizontal='s'
            borderRadius='m'
            height={theme.interactiveItems.height}
            backgroundColor='background'
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
                {items.map((item) => (
                    <NativePicker.Item color={theme.colors.textColor} label={item[1]} value={item[0]} key={item[0]} />
                ))}
            </BasePicker>
            <BaseBox position='absolute' top={0} right={0} bottom={0} justifyContent='center' alignItems='center' paddingRight='s'>
                <Entypo name='chevron-down' size={21} color={theme.colors.placeholderColor} />
            </BaseBox>
        </HorizontalView>
    );
}
