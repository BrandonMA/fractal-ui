import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { FontAwesome } from '@expo/vector-icons';

export function AppleButton(props: Omit<ButtonProps, 'variant'>): JSX.Element {
    const { text } = props;

    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='black'>
            <FontAwesome name='apple' size={text != null ? 18 : 24} color='white' />
        </Button>
    );
}
