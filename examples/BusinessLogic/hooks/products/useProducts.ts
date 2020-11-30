import { Product } from '../../models/Product';
import { useRecoilValue } from 'recoil';
import { productsAtom } from '../../atoms/products/productsAtom';

export function useProducts(): Map<number, Product> {
    return useRecoilValue(productsAtom);
}
