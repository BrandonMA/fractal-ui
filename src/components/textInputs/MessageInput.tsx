import React, { forwardRef, useCallback, useState } from 'react';
import { ButtonTextField } from './ButtonTextField';
import { TrazadoIcon } from '../../assets/TrazadoIcon';

interface MessageInputProps {
    onSend: (message: string) => void;
    onChangeText?: (text: string) => void;
    placeholder?: string;
}

const MessageInput = forwardRef(({ onSend, onChangeText, ...others }: MessageInputProps, ref: any): JSX.Element => {
    const showButton = true;
    const [text, setText] = useState('');

    const renderIcon = useCallback((color: string, size: number) => <TrazadoIcon height={size} width={size} fill={color} />, []);

    const handleSend = () => {
        onSend(text);
    };
    const handleChangeText = (text: string) => {
        setText(text);
        onChangeText?.(text);
    };
    return (
        <ButtonTextField
            ref={ref}
            showButton={showButton}
            buttonVariant={'success'}
            image={renderIcon}
            onPress={handleSend}
            onChangeText={handleChangeText}
            textFieldProps={{ onSubmitEditing: showButton ? undefined : handleSend }}
            {...others}
        />
    );
});

MessageInput.displayName = 'MessageInput';

export { MessageInput };
