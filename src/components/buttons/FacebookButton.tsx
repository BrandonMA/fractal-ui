import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { FontAwesome } from '@expo/vector-icons';

export function FacebookButton(props: Omit<ButtonProps, 'variant'>): JSX.Element {
    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='facebook'>
            <FontAwesome name='facebook' size={24} color='white' />
        </Button>
    );
}
