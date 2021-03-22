import React, { useCallback } from 'react';
import { usePickerState } from './hooks/usePickerState';
import { Platform } from 'react-native';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { BasePicker } from './BasePicker';
import { Layer } from '../../containers/Layer';
import { ChevronDown } from '../../../assets/ChevronDown';
import { PickerItem } from './PickerItem';
import { PickerProps } from './types/PickerProps';

export function Picker({ items, onChange, initialValue, disabled, ...others }: PickerProps): JSX.Element {
    const [currentValue, handleValueChange] = usePickerState(initialValue, items, onChange);
    const { colors, sizes, borderRadius, spacings } = useTheme();

    const renderItem = useCallback(
        (item) => {
            const value = item[0];
            const label = item[1];
            return <PickerItem color={colors.black} label={label} value={value} key={value} />;
        },
        [colors.black]
    );

    return (
        <HorizontalLayer
            justifyContent='space-between'
            alignItems={'center'}
            position='relative'
            borderRadius={borderRadius.s}
            height={sizes.textFieldHeight}
            backgroundColor={colors.textField}
            pointerEvents={disabled ? 'none' : 'auto'}
            paddingLeft={spacings.s}
            paddingRight={spacings.s}
            {...others}
        >
            <BasePicker
                borderWidth={Platform.OS === 'web' ? 0 : undefined}
                backgroundColor='transparent'
                color={colors.text}
                selectedValue={currentValue}
                dropdownIconColor={colors.placeholder}
                onValueChange={handleValueChange}
                mode='dropdown'
                fontSize={14}
                flex={1}
            >
                {items.map(renderItem)}
            </BasePicker>
            <Layer alignSelf='center' position='absolute' right={0} marginRight={spacings.s}>
                <ChevronDown width={21} fill={colors.placeholder} />
            </Layer>
        </HorizontalLayer>
    );
}
