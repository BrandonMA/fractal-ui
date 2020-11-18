import { useRecoilValue } from 'recoil';
import { productsAtom } from '../../atoms/products/productsAtom';
import { Product } from '../../models/Product';

export function useProducts(): Array<Product> {
    return useRecoilValue(productsAtom);
}
