import React from 'react';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { ButtonProps } from '../buttons/Button';
import { BaseMediaButton } from './BaseMediaButton';

export type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

export function GoogleButton(props: GoogleButtonProps): JSX.Element {
    return (
        <BaseMediaButton backgroundColor='white' pressedBackgroundColor={'#F4F4F4'} activityIndicatorColor={'black'} {...props}>
            <GoogleIcon height={24} />
        </BaseMediaButton>
    );
}
