import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { TextField } from './TextField';
import { useTheme } from '@shopify/restyle';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField';

export interface IconTextFieldProps extends Omit<BaseBoxProps, 'children'> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    textFieldProps?: BaseTextFieldProps;
}

export function IconTextField(props: IconTextFieldProps): JSX.Element {
    const { leftImage, rightImage, value, placeholder, onChangeText, textFieldProps, ...others } = props;
    const theme = useTheme<FractalTheme>();
    const paddingLeft = leftImage != null ? 'xs' : undefined;
    const paddingRight = rightImage != null ? 'xs' : undefined;

    return (
        <HorizontalView
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            borderRadius='textFieldRadius'
            height={theme.interactiveItems.textFieldHeight}
            backgroundColor='textFieldColor'
            justifyContent={'space-evenly'}
            alignItems={'center'}
            {...others}
        >
            {leftImage != null ? (
                <BaseBox flexShrink={0} height={theme.textFields.iconSize} width={theme.textFields.iconSize}>
                    {leftImage(theme.colors.placeholderColor, theme.textFields.iconSize)}
                </BaseBox>
            ) : null}
            <TextField
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                numberOfLines={1}
                flex={1}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                {...textFieldProps}
            />
            {rightImage != null ? (
                <BaseBox flexShrink={0} height={theme.textFields.iconSize} width={theme.textFields.iconSize}>
                    {rightImage(theme.colors.placeholderColor, theme.textFields.iconSize)}
                </BaseBox>
            ) : null}
        </HorizontalView>
    );
}
