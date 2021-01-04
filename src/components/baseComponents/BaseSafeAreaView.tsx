import React from 'react';
import { useRestyle } from '@shopify/restyle';
import { SafeAreaView } from 'react-native';
import { restyleFunctions } from './restyleFunctions';
import { BoxProps } from './BaseBox';

export type BaseSafeAreaViewProps = Partial<BoxProps>;

export function BaseSafeAreaView(props: BaseSafeAreaViewProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props);
    return <SafeAreaView {...restyleProps} />;
}
