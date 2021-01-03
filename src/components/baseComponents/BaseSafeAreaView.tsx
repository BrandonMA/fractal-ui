import React from 'react';
import { useRestyle } from '@shopify/restyle';
import { SafeAreaView } from 'react-native';
import { restyleFunctions } from './restyleFunctions';
import { BoxProps } from './BaseBox';

export function BaseSafeAreaView(props: BoxProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props);
    return <SafeAreaView {...restyleProps} />;
}
