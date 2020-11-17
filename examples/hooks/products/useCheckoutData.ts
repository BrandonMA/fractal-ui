import { useAllCartItems } from './useAllCartItems';
import { mockProducts } from '../../data/mockProducts';

export function useCheckoutData(): [number, number, number] {
    const items = useAllCartItems();
    let total = 0;
    items.forEach((value, key) => {
        const product = mockProducts.find((product) => product.sku === key);
        const itemTotal = value * (product?.price ?? 0);
        total += itemTotal;
    });
    const iva = total * 0.16;
    return [total, iva, total + iva];
}
