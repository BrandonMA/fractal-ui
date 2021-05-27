import React, { forwardRef, useCallback } from 'react';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField, IconTextFieldProps } from './IconTextField';

interface ButtonTextFieldProps extends IconTextFieldProps {
    onPress: (text: string) => void;
    image: (color: string, size: number) => JSX.Element;
    buttonVariant?: ButtonVariant;
    showButton?: boolean;
}

const ButtonTextField = forwardRef(
    (
        { value, image, onChangeText, onPress, showButton = false, buttonVariant = 'main', ...others }: ButtonTextFieldProps,
        ref: any
    ): JSX.Element => {
        const { colors, sizes, spacings } = useTheme();
        const [text, setText] = useControllableState(value, '', onChangeText);

        const renderIcon = useCallback((color: string, size: number) => image?.(color, size), [image]);

        const handleChangeText = (text: string) => {
            setText(text);
        };
        const handlePress = () => {
            onPress(text);
        };

        return (
            <HorizontalLayer width={'100%'} alignItems={'center'} height={sizes.textFieldHeight}>
                <IconTextField
                    ref={ref}
                    flex={1}
                    value={text}
                    paddingLeft={spacings.xs}
                    onChangeText={handleChangeText}
                    leftImage={showButton ? undefined : renderIcon}
                    {...others}
                />
                {showButton ? (
                    <Button variant={buttonVariant} marginLeft={spacings.m} width={sizes.textFieldHeight} onPress={handlePress}>
                        {image(colors.white, 24)}
                    </Button>
                ) : null}
            </HorizontalLayer>
        );
    }
);

ButtonTextField.displayName = 'ButtonTextField';

export { ButtonTextField };
