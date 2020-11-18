import { useCartItems } from './useCartItems';
import { useProducts } from './useProducts';

export function useCheckoutData(): [number, number, number] {
    const items = useCartItems();
    const products = useProducts();

    let totalBeforeTaxes = 0;
    items.forEach((value, key) => {
        const product = products.find((product) => product.sku === key);
        const itemTotal = value * (product?.price ?? 0);
        totalBeforeTaxes += itemTotal;
    });

    const taxes = totalBeforeTaxes * 0.16;

    return [totalBeforeTaxes, taxes, totalBeforeTaxes + taxes];
}
