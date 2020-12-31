import React from 'react';
import { useRestyle } from '@shopify/restyle';
import { SafeAreaView } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { restyleFunctions } from './restyleFunctions';

export function BaseSafeAreaView(props: BaseBoxProps): JSX.Element {
    const restyleProps = useRestyle(restyleFunctions, props);
    return <SafeAreaView {...restyleProps} />;
}
