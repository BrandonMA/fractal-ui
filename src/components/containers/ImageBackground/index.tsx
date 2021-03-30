import React from 'react';
import styled from 'styled-components';
import { ImageBackgroundProps } from './types';
import { Layer } from '../Layer';

interface BackgroundImageProps {
    imagePath: string | number;
}

const StyledImageBackground = styled(Layer)`
    background-image: url(${(props: BackgroundImageProps) => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
`;

export function ImageBackground({ source, ...others }: ImageBackgroundProps): JSX.Element {
    return <StyledImageBackground imagePath={source} {...others} />;
}
