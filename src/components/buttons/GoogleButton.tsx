import React from 'react';
import { ButtonProps } from './types/ButtonProps';
import { Button } from './Button';
import { GoogleIcon } from '../assets/GoogleIcon';

export type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>>;

export function GoogleButton(props: GoogleButtonProps): JSX.Element {
    return (
        <Button variant='mainInteractiveColor' addShadow {...props} backgroundColor='white'>
            <GoogleIcon height={24} />
        </Button>
    );
}
