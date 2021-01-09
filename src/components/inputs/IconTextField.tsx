import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { TextField } from './TextField';
import { useTheme } from '@shopify/restyle';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField';

export interface IconTextFieldProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    textFieldProps?: BaseTextFieldProps;
}

export function IconTextField({
    leftImage,
    rightImage,
    value,
    placeholder,
    onChangeText,
    textFieldProps,
    ...others
}: IconTextFieldProps): JSX.Element {
    const { interactiveItems, textFields, colors } = useTheme<FractalTheme>();
    const paddingLeft = leftImage != null ? 'xs' : undefined;
    const paddingRight = rightImage != null ? 'xs' : undefined;

    return (
        <HorizontalView
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            borderRadius='textFieldRadius'
            height={interactiveItems.textFieldHeight}
            backgroundColor='textFieldColor'
            justifyContent={'space-evenly'}
            alignItems={'center'}
            {...others}
        >
            {leftImage != null ? (
                <BaseBox flexShrink={0} height={textFields.iconSize} width={textFields.iconSize}>
                    {leftImage(colors.placeholderColor, textFields.iconSize)}
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
                <BaseBox flexShrink={0} height={textFields.iconSize} width={textFields.iconSize}>
                    {rightImage(colors.placeholderColor, textFields.iconSize)}
                </BaseBox>
            ) : null}
        </HorizontalView>
    );
}
