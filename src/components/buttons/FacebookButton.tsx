import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { FontAwesome } from '@expo/vector-icons';

export type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>>;

export function FacebookButton(props: FacebookButtonProps): JSX.Element {
    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='facebook'>
            <FontAwesome name='facebook' size={24} color='white' />
        </Button>
    );
}
