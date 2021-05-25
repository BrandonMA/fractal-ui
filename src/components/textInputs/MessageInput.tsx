import React, { forwardRef, useCallback, useState } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useTheme } from '../../context';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField, IconTextFieldProps } from './IconTextField';

interface MessageInputProps extends IconTextFieldProps {
    onSendMessage: (message: string) => void;
    buttonVariant?: ButtonVariant;
}

const MessageInput = forwardRef(
    ({ onSendMessage, buttonVariant = 'success', ...others }: MessageInputProps, ref: any): JSX.Element => {
        const { colors, sizes, spacings } = useTheme();
        const [text, setText] = useState('');

        const renderIcon = useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

        const handleSend = () => {
            onSendMessage(text);
        };

        return (
            <HorizontalLayer width={'100%'} alignItems={'center'} height={sizes.textFieldHeight}>
                <IconTextField
                    ref={ref}
                    flex={1}
                    value={text}
                    paddingLeft={spacings.xs}
                    onChangeText={(text) => setText(text)}
                    {...others}
                />
                <Button variant={buttonVariant} marginLeft={spacings.m} width={sizes.textFieldHeight} onPress={handleSend}>
                    {renderIcon(colors.white, 24)}
                </Button>
            </HorizontalLayer>
        );
    }
);

MessageInput.displayName = 'MessageInput';

export { MessageInput };
