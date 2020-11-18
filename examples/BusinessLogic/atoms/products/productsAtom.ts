import { atom } from 'recoil';
import { mockProducts } from '../../data/mockProducts';

export const productsAtom = atom({
    key: 'productsAtom',
    default: mockProducts
});
