import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../core';
import { Layer } from './containers/Layer';
import { TouchableOpacity } from './buttons/TouchableOpacity';
import { TouchableOpacityProps } from './buttons/TouchableOpacity/types';

interface BubbleTriangleProps {
    color: string;
}

const BubbleTriangleLeft = styled(Layer)`
    position: absolute;
    left: 0px;
    border-color: transparent;
    border-top-color: ${(props: BubbleTriangleProps) => props.color};
    border-top-width: 12px;
    border-left-width: 8px;
    border-left-color: transparent;
    background-color: transparent;
    border-style: solid;
`;

const BubbleTriangleRight = styled(Layer)`
    position: absolute;
    right: 0px;
    border-color: transparent;
    border-top-color: ${(props: BubbleTriangleProps) => props.color};
    border-top-width: 12px;
    border-right-width: 8px;
    border-right-color: transparent;
    background-color: transparent;
    border-style: solid;
`;

interface BubbleProps extends BubbleTriangleProps, TouchableOpacityProps {
    arrowPosition: 'left' | 'right';
}

export function Bubble({ children, arrowPosition, color, ...others }: BubbleProps): JSX.Element {
    const { shadows, spacings, borderRadius } = useTheme();
    return (
        <TouchableOpacity {...others}>
            <Layer
                position={'relative'}
                maxWidth={'75%'}
                paddingLeft={arrowPosition === 'left' ? 6 : 0}
                paddingRight={arrowPosition === 'right' ? 6 : 0}
                flexDirection={'row'}
                alignSelf={arrowPosition === 'left' ? 'flex-start' : 'flex-end'}
            >
                <Layer
                    padding={spacings.m}
                    backgroundColor={color}
                    borderRadius={borderRadius.m}
                    borderTopLeftRadius={arrowPosition === 'left' ? 0 : borderRadius.m}
                    borderTopRightRadius={arrowPosition === 'right' ? 0 : borderRadius.m}
                    boxShadow={shadows.mainShadow}
                    width={'100%'}
                >
                    {children}
                </Layer>
                {arrowPosition == 'left' ? <BubbleTriangleLeft color={color} /> : <BubbleTriangleRight color={color} />}
            </Layer>
        </TouchableOpacity>
    );
}
