import React from 'react';
import { Image } from '../Image';
import { AvatarProps } from './types';

export function Avatar({ source, size = 64, ...others }: AvatarProps): JSX.Element {
    return <Image source={source} width={size} height={size} borderRadius={size / 2} {...others} />;
}
