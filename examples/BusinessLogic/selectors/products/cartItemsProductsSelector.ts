import { selector } from 'recoil';
import { cartItemsProductArrayAtom } from '../../atoms/products/cartItemsProductArrayAtom';
import { productsAtom } from '../../atoms/products/productsAtom';

export const cartItemsProductsSelector = selector({
    key: 'cartItemsProductsSelector',
    get: (props) => {
        const { get } = props;
        const cartItemsProductList = get(cartItemsProductArrayAtom);
        const products = get(productsAtom);
        return cartItemsProductList.map((item) => {
            return products.find((product) => product.sku === item);
        });
    }
});
