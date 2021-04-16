import React, { forwardRef } from 'react';
import { Image } from '../Image';
import { AvatarProps } from './types';

export const Avatar = forwardRef(
    ({ size = 64, ...others }: AvatarProps, ref: any): JSX.Element => {
        return <Image ref={ref} width={size} height={size} borderRadius={size / 2} {...others} />;
    }
);
