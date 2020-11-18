import { useRecoilValue } from 'recoil';
import { cartItemsAtomFamily } from '../../atoms/products/cartItemsAtomFamily';
import { useProducts } from './useProducts';

export function useCartItems(): Map<string, number> {
    const products = useProducts();
    const allProductsIDs = products.map((product) => product.sku);

    const cartItems = new Map<string, number>();
    allProductsIDs.forEach((id) => {
        cartItems.set(id, useRecoilValue(cartItemsAtomFamily(id)));
    });

    return cartItems;
}
