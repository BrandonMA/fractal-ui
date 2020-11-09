import { mockProducts } from '../../data';
import { useAllCartItems } from './useAllCartItems';
import { Product } from '../../models/Product';

export function useCartItemProducts(): Array<Product> {
    const items = useAllCartItems();
    return mockProducts.filter((product) => {
        const cartItem = items.get(product.sku);
        return cartItem != null && cartItem > 0;
    });
}
