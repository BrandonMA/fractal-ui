import { Product } from '../../models/Product';
import { useRecoilValue } from 'recoil';
import { filteredProductsAtom } from '../../atoms/filters/filteredProductsAtom';

export function useFilteredProducts(): Map<number, Product> {
    return useRecoilValue(filteredProductsAtom);
}
