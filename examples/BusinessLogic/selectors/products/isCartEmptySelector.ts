import { selector } from 'recoil';
import { cartItemsProductsAtom } from '../../atoms/cartItems/cartItemsProductsAtom';

export const isCartEmptySelector = selector({
    key: 'isCartEmptySelector',
    get: (props) => {
        const { get } = props;
        const cartItemsProducts = get(cartItemsProductsAtom);
        return cartItemsProducts.size === 0;
    }
});
