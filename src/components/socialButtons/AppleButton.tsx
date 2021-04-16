import React, { forwardRef } from 'react';
import { AppleIcon } from '../../assets/AppleIcon';
import { ButtonProps } from '../buttons/Button';
import { BaseMediaButton } from './BaseMediaButton';
import { getAppleButtonAccessibilityProps } from './accessibility/getAppleButtonAccessibilityProps';

export type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};

export const AppleButton = forwardRef(
    (props: AppleButtonProps, ref: any): JSX.Element => {
        const { text } = props;

        return (
            <BaseMediaButton
                ref={ref}
                backgroundColor='black'
                pressedBackgroundColor={'#111111'}
                {...props}
                {...getAppleButtonAccessibilityProps()}
            >
                <AppleIcon height={text != null ? 18 : 24} fill='white' />
            </BaseMediaButton>
        );
    }
);
