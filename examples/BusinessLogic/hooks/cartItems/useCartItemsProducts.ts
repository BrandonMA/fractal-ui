import { useRecoilValue } from 'recoil';
import { cartItemsProductsAtom } from '../../atoms/cartItems/cartItemsProductsAtom';
import { Product } from '../../models/Product';

export function useCartItemsProducts(): Map<number, Product> {
    return useRecoilValue(cartItemsProductsAtom);
}
