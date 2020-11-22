import { Product } from '../../models/Product';
import { useRecoilValue } from 'recoil';
import { cartItemsProductsSelector } from '../../selectors/products/cartItemsProductsSelector';

export function useCartItemProducts(): Array<Product> {
    return useRecoilValue(cartItemsProductsSelector);
}
