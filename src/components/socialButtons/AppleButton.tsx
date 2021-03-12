import React from 'react';
import { AppleIcon } from '../../assets/AppleIcon';
import { ButtonProps } from '../buttons/Button';
import { BaseMediaButton } from './BaseMediaButton';

export type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

export function AppleButton(props: AppleButtonProps): JSX.Element {
    const { text } = props;

    return (
        <BaseMediaButton backgroundColor='black' pressedBackgroundColor={'#111111'} {...props}>
            <AppleIcon height={text != null ? 18 : 24} fill='white' />
        </BaseMediaButton>
    );
}
