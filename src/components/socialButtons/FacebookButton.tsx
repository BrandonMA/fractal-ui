import React, { forwardRef } from 'react';
import { FacebookIcon } from '../../assets/FacebookIcon';
import { ButtonProps } from '../buttons/Button';
import { BaseMediaButton } from './BaseMediaButton';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';

export type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

export const FacebookButton = forwardRef(
    (props: FacebookButtonProps, ref: any): JSX.Element => {
        return (
            <BaseMediaButton
                ref={ref}
                backgroundColor='#3975EA'
                pressedBackgroundColor={'#295AC9'}
                {...props}
                {...getFacebookButtonAccessibilityProps()}
            >
                <FacebookIcon height={24} fill='white' />
            </BaseMediaButton>
        );
    }
);
