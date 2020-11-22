import { selector } from 'recoil';
import { cartItemsSelector } from './cartItemsSelector';
import { productsAtom } from '../../atoms/products/productsAtom';

export const checkoutDataSelector = selector<[number, number, number]>({
    key: 'checkoutDataSelector',
    get: (props) => {
        const { get } = props;
        const cartItems = get(cartItemsSelector);
        const products = get(productsAtom);

        let totalBeforeTaxes = 0;
        cartItems.forEach((value, key) => {
            const product = products.find((product) => product.sku === key);
            const itemTotal = value * (product?.price ?? 0);
            totalBeforeTaxes += itemTotal;
        });

        const taxes = totalBeforeTaxes * 0.16;

        return [totalBeforeTaxes, taxes, totalBeforeTaxes + taxes];
    }
});
