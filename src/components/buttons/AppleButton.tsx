import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { AppleIcon } from '../assets/AppleIcon';

export type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>>;

export function AppleButton(props: AppleButtonProps): JSX.Element {
    const { text } = props;

    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='black'>
            <AppleIcon height={text != null ? 18 : 24} fill='white' />
        </Button>
    );
}
