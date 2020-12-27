import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BaseColorText, BaseColorTextProps } from '../Text/BaseColorText';

export interface BaseTextButtonProps extends BaseColorTextProps {
    onPress?: () => void;
}

export function BaseTextButton(props: BaseTextButtonProps): JSX.Element {
    const { onPress, ...others } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <BaseColorText {...others} />
        </TouchableOpacity>
    );
}
