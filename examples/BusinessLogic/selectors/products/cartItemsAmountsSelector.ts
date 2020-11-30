import { selector } from 'recoil';
import { cartItemsProductsAtom } from '../../atoms/cartItems/cartItemsProductsAtom';
import { cartItemsAmountAtomFamily } from '../../atoms/cartItems/cartItemsAmountAtomFamily';

export const cartItemsAmountsSelector = selector({
    key: 'cartItemsAmountsSelector',
    get: (props) => {
        const { get } = props;
        const cartItemsProductList = get(cartItemsProductsAtom);

        const cartItems = new Map<number, number>();
        cartItemsProductList.forEach((product) => {
            cartItems.set(product.sku, get(cartItemsAmountAtomFamily(product.sku)));
        });

        return cartItems;
    }
});
