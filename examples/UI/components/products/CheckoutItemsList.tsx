import React from 'react';
import { useCartItemProducts } from '../../../BusinessLogic/hooks/products/useCartItemProducts';
import { BaseProductsList } from './BaseProductsList';
import { CheckoutZone } from './CheckoutZone';

export function CheckoutItemsList(): JSX.Element {
    const checkoutItems = useCartItemProducts();
    return <BaseProductsList products={checkoutItems} disablePress footer={<CheckoutZone />} />;
}
