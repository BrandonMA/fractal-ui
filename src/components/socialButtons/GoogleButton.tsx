import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { ButtonProps } from '../buttons/Button';
import { BaseMediaButton } from './BaseMediaButton';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';

export type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

const GoogleButton = forwardRef(
    (props: GoogleButtonProps, ref: any): JSX.Element => {
        return (
            <BaseMediaButton
                ref={ref}
                backgroundColor='white'
                pressedBackgroundColor={'#F4F4F4'}
                activityIndicatorColor={'black'}
                {...props}
                {...getGoogleButtonAccessibilityProps()}
            >
                <GoogleIcon height={24} />
            </BaseMediaButton>
        );
    }
);

GoogleButton.displayName = 'GoogleButton';

export { GoogleButton };
