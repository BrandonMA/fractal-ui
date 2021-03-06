import React, { ReactNode } from 'react';
import { useRestyle } from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { restyleFunctions } from './restyleFunctions';
import { BoxProps } from './BaseBox';

export interface BaseTouchableOpacityProps extends Partial<Omit<BoxProps, 'children'>>, TouchableOpacityProps {
    children: ReactNode;
}

export function BaseTouchableOpacity(props: BaseTouchableOpacityProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props);
    return <TouchableOpacity {...restyleProps} />;
}
