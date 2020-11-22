import { useRecoilValue } from 'recoil';
import { cartItemsSelector } from '../../selectors/products/cartItemsSelector';

export function useCartItems(): Map<string, number> {
    return useRecoilValue(cartItemsSelector);
}
