import { atom } from 'recoil';
import { Product } from '../../models/Product';

export const cartItemsProductsAtom = atom({
    key: 'cartItemsIDsArrayAtom',
    default: new Map<number, Product>()
});
