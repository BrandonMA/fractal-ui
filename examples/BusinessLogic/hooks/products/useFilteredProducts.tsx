import { Product } from '../../models/Product';
import { useRecoilValue } from 'recoil';
import { filteredProductsSelector } from '../../selectors/filters/filteredProductsSelector';

export function useFilteredProducts(): Array<Product> {
    return useRecoilValue(filteredProductsSelector);
}
