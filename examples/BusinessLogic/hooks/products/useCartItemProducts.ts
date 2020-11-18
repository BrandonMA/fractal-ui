import { useCartItems } from './useCartItems';
import { Product } from '../../models/Product';
import { useProducts } from './useProducts';

export function useCartItemProducts(): Array<Product> {
    const products = useProducts();
    const items = useCartItems();
    return products.filter((product) => {
        const cartItem = items.get(product.sku);
        return cartItem != null && cartItem > 0;
    });
}
