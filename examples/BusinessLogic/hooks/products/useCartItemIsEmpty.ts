import { useCartItems } from './useCartItems';

export function useCartItemIsEmpty(): boolean {
    const items = useCartItems();
    const totalItems = Array.from(items.values()).reduce((currentAmount, prevAmount) => currentAmount + prevAmount);
    return totalItems <= 0;
}
