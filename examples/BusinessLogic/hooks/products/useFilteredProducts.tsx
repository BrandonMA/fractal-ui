import { Product } from '../../models/Product';
import { useRecoilValue } from 'recoil';
import { activeFiltersAtom } from '../../atoms/filters/activeFiltersAtom';
import { productsSearchAtom } from '../../atoms/products/productsSearchAtom';
import { LayoutAnimation } from 'react-native';
import { LayoutConfig } from '../../../UI/animations/LayoutConfig';
import { useProducts } from './useProducts';

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

export function useFilteredProducts(): Array<Product> {
    const filters = useRecoilValue(activeFiltersAtom);
    const searchText = useRecoilValue(productsSearchAtom);
    const products = useProducts();
    let filteredProducts = filterProducts(filters, products);
    filteredProducts = searchOnProducts(searchText, filteredProducts);
    LayoutAnimation.configureNext(LayoutConfig); // Schedule layout to animate change on the presented items.
    return filteredProducts;
}
