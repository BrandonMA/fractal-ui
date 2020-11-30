import { selector } from 'recoil';
import { cartItemsAmountsSelector } from './cartItemsAmountsSelector';
import { cartItemsProductsAtom } from '../../atoms/cartItems/cartItemsProductsAtom';

export const checkoutDataSelector = selector<[number, number, number]>({
    key: 'checkoutDataSelector',
    get: (props) => {
        const { get } = props;
        const cartItemsAmounts = get(cartItemsAmountsSelector);
        const cartProducts = get(cartItemsProductsAtom);

        let totalBeforeTaxes = 0;
        cartItemsAmounts.forEach((value, key) => {
            const product = cartProducts.get(key);
            const itemTotal = value * (product?.price ?? 0);
            totalBeforeTaxes += itemTotal;
        });

        const taxes = totalBeforeTaxes * 0.16;

        return [totalBeforeTaxes, taxes, totalBeforeTaxes + taxes];
    }
});
