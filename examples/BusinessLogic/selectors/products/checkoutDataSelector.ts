import { selector } from 'recoil';
import { cartItemsAmountsSelector } from './cartItemsAmountsSelector';
import { cartItemsProductsAtom } from '../../atoms/cartItems/cartItemsProductsAtom';

export const checkoutDataSelector = selector<[string, string, string]>({
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

        return [totalBeforeTaxes.toFixed(2), taxes.toFixed(2), (totalBeforeTaxes + taxes).toFixed(2)];
    }
});
