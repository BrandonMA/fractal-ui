import { selectorFamily } from 'recoil';
import { productsAtom } from '../../atoms/products/productsAtom';
import { filteredProductsAtom } from '../../atoms/filters/filteredProductsAtom';
import { Product } from '../../models/Product';

export const productSelectorFamily = selectorFamily({
    key: 'productSelectorFamily',
    get: (productID: number) => (props) => {
        const { get } = props;
        const products = get(productsAtom);
        if (products.has(productID)) {
            return products.get(productID) as Product;
        } else {
            const filteredProducts = get(filteredProductsAtom);
            return filteredProducts.get(productID) as Product;
        }
    }
});
