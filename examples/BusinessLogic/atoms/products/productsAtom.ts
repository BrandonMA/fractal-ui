import { atom } from 'recoil';
import { Product } from '../../models/Product';

export const productsAtom = atom({
    key: 'productsAtom',
    default: Array<Product>()
});
