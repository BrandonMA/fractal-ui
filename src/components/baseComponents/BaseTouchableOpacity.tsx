import React, { ReactNode } from 'react';
import { useRestyle } from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { restyleFunctions } from './restyleFunctions';

export interface BaseTouchableOpacityProps extends Omit<BaseBoxProps, 'children'>, TouchableOpacityProps {
    children: ReactNode;
}

export function BaseTouchableOpacity(props: BaseTouchableOpacityProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props) as BaseTouchableOpacityProps;
    return <TouchableOpacity {...restyleProps} />;
}
