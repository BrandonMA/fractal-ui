import { Product } from '../../models/Product';
import { mockProducts } from '../../data';
import { useRecoilValue } from 'recoil';
import { activeFiltersAtom } from '../../atoms/products/activeFiltersAtom';
import { productsSearchAtom } from '../../atoms/products/productsSearchAtom';

function filterProducts(filters: Array<string>, products: Array<Product>): Array<Product> {
    if (filters.length > 0) {
        return products.filter((product) => {
            const filter = product.filters.find((filter) => {
                return filters.includes(filter);
            });
            return filter != null;
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

export function useFilteredProducts(): Array<Product> {
    const filters = useRecoilValue(activeFiltersAtom);
    const searchText = useRecoilValue(productsSearchAtom);
    let products = mockProducts;
    products = filterProducts(filters, products);
    products = searchOnProducts(searchText, products);
    return products;
}
