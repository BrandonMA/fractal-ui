import { atom } from 'recoil';
import { Product } from '../../models/Product';

export const filteredProductsAtom = atom({
    key: 'filteredProductsAtom',
    default: new Map<number, Product>()
});
