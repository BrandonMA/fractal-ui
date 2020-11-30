import React from 'react';
import { BaseProductsList } from './BaseProductsList';
import { CheckoutZone } from './CheckoutZone';
import { useCartItemsProducts } from '../../../BusinessLogic/hooks/cartItems/useCartItemsProducts';

export function CheckoutItemsList(): JSX.Element {
    const cartItemProducts = useCartItemsProducts();
    return <BaseProductsList products={cartItemProducts} disablePress footer={<CheckoutZone />} />;
}
