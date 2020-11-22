import { selector } from 'recoil';
import { cartItemsProductArrayAtom } from '../../atoms/products/cartItemsProductArrayAtom';
import { cartItemsAtomFamily } from '../../atoms/products/cartItemsAtomFamily';

export const cartItemsSelector = selector({
    key: 'cartItemsSelector',
    get: (props) => {
        const { get } = props;
        const cartItemsProductList = get(cartItemsProductArrayAtom);

        const cartItems = new Map<string, number>();
        cartItemsProductList.forEach((sku) => {
            cartItems.set(sku, get(cartItemsAtomFamily(sku)));
        });

        return cartItems;
    }
});
