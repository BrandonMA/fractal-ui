import React from 'react';
import { NavigationBar, NavigationBarRightView, StackNavigator, StackScreen } from '../../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { stackTitles } from '../../stackTitles';
import { ProductsScreen } from './screens/ProductsScreen';
import { FloatingCartButton } from '../../../components/products/FloatingCartButton';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { ProductScreen } from './screens/ProductScreen';
import { AddressPickingScreen } from './screens/AddressPickingScreen';
import { CreateAddressButton } from '../../../components/addresses/CreateAddressButton';
import { CreateAddressScreen } from './screens/CreateAddressScreen';

export function ProductsStackNavigator(): JSX.Element {
    return (
        <>
            <StackNavigator path={tabRoutes.products}>
                <StackScreen path={tabRoutes.products}>
                    <NavigationBar title={stackTitles.products} largeTitle />
                    <ProductsScreen />
                </StackScreen>
                <StackScreen path={tabRoutes.checkout}>
                    <NavigationBar title={stackTitles.checkout} largeTitle={false} backTitle={stackTitles.products} />
                    <CheckoutScreen />
                </StackScreen>
                <StackScreen path={tabRoutes.product}>
                    <NavigationBar title={stackTitles.product} largeTitle={false} backTitle={stackTitles.products} />
                    <ProductScreen />
                </StackScreen>
                <StackScreen path={tabRoutes.addressPicker}>
                    <NavigationBar title={stackTitles.addressPicker} largeTitle={false} backTitle={stackTitles.checkout}>
                        <NavigationBarRightView>
                            <CreateAddressButton />
                        </NavigationBarRightView>
                    </NavigationBar>
                    <AddressPickingScreen />
                </StackScreen>
                <StackScreen path={tabRoutes.addressCreator}>
                    <NavigationBar title={stackTitles.addressCreator} largeTitle={false} backTitle={stackTitles.addressPicker} />
                    <CreateAddressScreen />
                </StackScreen>
            </StackNavigator>
            <FloatingCartButton />
        </>
    );
}