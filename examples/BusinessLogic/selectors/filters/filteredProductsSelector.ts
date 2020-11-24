import { selector } from 'recoil';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { productsSearchAtom } from '../../atoms/products/productsSearchAtom';
import { productsAtom } from '../../atoms/products/productsAtom';
import { Product } from '../../models/Product';

function filterProducts(activeFilters: Array<number>, products: Array<Product>): Array<Product> {
    if (activeFilters.length > 0) {
        return products.filter((product) => {
            return activeFilters.includes(product.filter);
        });
    }
    return products;
}

function searchOnProducts(search: string, products: Array<Product>): Array<Product> {
    if (search !== '') {
        return products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    return products;
}

export const filteredProductsSelector = selector({
    key: 'filteredProductsSelector',
    get: (props) => {
        const { get } = props;
        const activeFiltersList = get(activeFiltersArrayAtom);
        const searchText = get(productsSearchAtom);
        let filteredProducts = filterProducts(activeFiltersList, get(productsAtom));
        filteredProducts = searchOnProducts(searchText, filteredProducts);
        return filteredProducts;
    }
});
