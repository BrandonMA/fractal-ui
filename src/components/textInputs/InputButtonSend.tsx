import React, { forwardRef, useCallback } from 'react';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField, IconTextFieldProps } from './IconTextField';

interface InputButtonSendProps extends IconTextFieldProps {
    onSend: (text: string) => void;
    children: (color: string, size: number) => JSX.Element;
    addEventBasedSend?: boolean;
    buttonVariant?: ButtonVariant;
}

const InputButtonSend = forwardRef(
    (
        { value, children, onChangeText, onSend, addEventBasedSend = false, buttonVariant = 'main', ...others }: InputButtonSendProps,
        ref: any
    ): JSX.Element => {
        const { colors, sizes, spacings } = useTheme();
        const [text, setText] = useControllableState(value, '', onChangeText);

        const renderIcon = useCallback((color: string, size: number) => children?.(color, size), [children]);

        const handleChangeText = (text: string) => {
            if (!addEventBasedSend) {
                onSend(text);
            }
            setText(text);
        };

        const handleSend = () => {
            onSend(text);
        };

        return (
            <HorizontalLayer width={'100%'} alignItems={'center'} height={sizes.textFieldHeight}>
                <IconTextField
                    ref={ref}
                    flex={1}
                    value={text}
                    paddingLeft={spacings.xs}
                    onChangeText={handleChangeText}
                    textFieldProps={{ onSubmitEditing: addEventBasedSend ? handleSend : undefined }}
                    leftImage={addEventBasedSend ? undefined : renderIcon}
                    {...others}
                />
                {addEventBasedSend ? (
                    <Button variant={buttonVariant} marginLeft={spacings.m} width={sizes.textFieldHeight} onPress={handleSend}>
                        {children?.(colors.white, 24)}
                    </Button>
                ) : null}
            </HorizontalLayer>
        );
    }
);

InputButtonSend.displayName = 'InputButtonSend';

export { InputButtonSend };
