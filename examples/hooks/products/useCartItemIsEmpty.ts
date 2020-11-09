import { useAllCartItems } from './useAllCartItems';

export function useCartItemIsEmpty(): boolean {
    const items = useAllCartItems();
    const total = Array.from(items.values()).reduce((current, prev) => current + prev);
    return total <= 0;
}
