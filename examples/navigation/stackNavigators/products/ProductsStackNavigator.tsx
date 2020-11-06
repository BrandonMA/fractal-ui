import React from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { stackTitles } from '../../stackTitles';
import { ProductsScreen } from './screens/ProductsScreen';

export function ProductsStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.products}>
            <StackScreen path={tabRoutes.products}>
                <NavigationBar title={stackTitles.products} largeTitle />
                <ProductsScreen />
            </StackScreen>
        </StackNavigator>
    );
}
