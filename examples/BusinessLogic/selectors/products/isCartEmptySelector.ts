import { selector } from 'recoil';
import { cartItemsProductArrayAtom } from '../../atoms/products/cartItemsProductArrayAtom';

export const isCartEmptySelector = selector({
    key: 'isCartEmptySelector',
    get: (props) => {
        const { get } = props;
        const cartItemsProducts = get(cartItemsProductArrayAtom);
        return cartItemsProducts.length === 0;
    }
});
