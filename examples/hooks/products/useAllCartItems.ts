import { useRecoilValue } from 'recoil';
import { cartItemsAtomFamily } from '../../atoms/products/cartItemsAtomFamily';
import { mockProducts } from '../../data/mockProducts';

export function useAllCartItems(): Map<string, number> {
    const allIDs = mockProducts.map((product) => product.sku);
    const items = new Map<string, number>();
    allIDs.forEach((id) => {
        items.set(id, useRecoilValue(cartItemsAtomFamily(id)));
    });
    return items;
}
