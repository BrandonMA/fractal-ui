import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { FontAwesome } from '@expo/vector-icons';

export type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>>;

export function AppleButton(props: AppleButtonProps): JSX.Element {
    const { text } = props;

    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='black'>
            <FontAwesome name='apple' size={text != null ? 18 : 24} color='white' />
        </Button>
    );
}
