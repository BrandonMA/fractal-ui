import { selector } from 'recoil';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { productsSearchAtom } from '../../atoms/products/productsSearchAtom';
import { productsAtom } from '../../atoms/products/productsAtom';
import { Product } from '../../models/Product';

function filterProducts(filters: Array<string>, products: Array<Product>): Array<Product> {
    if (filters.length > 0) {
        const newProducts = products.filter((product) => {
            const filter = product.filters.find((filter) => {
                return filters.includes(filter);
            });
            return filter != null;
        });

        if (newProducts.length !== products.length) {
            return newProducts;
        }
    }
    return products;
}

function searchOnProducts(search: string, products: Array<Product>): Array<Product> {
    if (search !== '') {
        const newProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

        if (newProducts.length !== products.length) {
            return newProducts;
        }
    }
    return products;
}

export const filteredProductsSelector = selector({
    key: 'filteredProductsSelector',
    get: (props) => {
        const { get } = props;
        const activeFiltersList = get(activeFiltersArrayAtom);
        const searchText = get(productsSearchAtom);
        const products = get(productsAtom);
        let filteredProducts = filterProducts(activeFiltersList, products);
        filteredProducts = searchOnProducts(searchText, filteredProducts);
        return filteredProducts;
    }
});
