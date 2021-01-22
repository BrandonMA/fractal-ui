import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { FacebookIcon } from '../assets/FacebookIcon';

export type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>>;

export function FacebookButton(props: FacebookButtonProps): JSX.Element {
    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='facebook'>
            <FacebookIcon height={24} fill='white' />
        </Button>
    );
}
