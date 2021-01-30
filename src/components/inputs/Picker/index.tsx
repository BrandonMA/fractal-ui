import React, { useCallback } from 'react';
import { useTheme } from '@shopify/restyle';
import { usePickerState } from './hooks/usePickerState';
import { PickerProps } from './types/PickerProps';
import { FractalTheme } from '../../../themes/FractalTheme';
import { HorizontalView } from '../../containers/HorizontalView';
import { BasePicker } from '../../baseComponents/BasePicker';
import { BaseBox } from '../../baseComponents/BaseBox';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { Platform } from 'react-native';
import { ChevronDown } from '../../assets/ChevronDown';

const style: any = {
    appearance: 'none',
    cursor: 'pointer'
};

export function Picker({ items, onChange, initialValue, disabled, ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange] = usePickerState(initialValue, items, onChange);
    const { colors, interactiveItems } = useTheme<FractalTheme>();

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <NativePicker.Item color={colors.black} label={label} value={value} key={value} />;
        },
        [colors.black]
    );

    return (
        <HorizontalView
            justifyContent='space-between'
            alignItems={'center'}
            borderRadius='textFieldRadius'
            height={interactiveItems.textFieldHeight}
            backgroundColor='textFieldColor'
            pointerEvents={disabled ? 'none' : 'auto'}
            paddingHorizontal='s'
            {...others}
        >
            <BasePicker
                borderWidth={Platform.OS === 'web' ? 0 : undefined}
                backgroundColor='transparent'
                color='textColor'
                selectedValue={currentValue}
                dropdownIconColor={colors.placeholderColor}
                onValueChange={handleValueChange}
                mode='dropdown'
                fontSize={14}
                flex={1}
                style={Platform.OS === 'web' ? style : undefined}
            >
                {items.map(renderItem)}
            </BasePicker>
            <BaseBox alignSelf='center' position='absolute' right={0} marginRight='s'>
                <ChevronDown width={21} fill={colors.placeholderColor} />
            </BaseBox>
        </HorizontalView>
    );
}
