import React from 'react';
import { useCartItemProducts } from '../../hooks/products/useCartItemProducts';
import { BaseProductsList } from './BaseProductsList';

export function CheckoutItemsList(): JSX.Element {
    const checkoutItems = useCartItemProducts();
    return <BaseProductsList products={checkoutItems} disablePress />;
}
