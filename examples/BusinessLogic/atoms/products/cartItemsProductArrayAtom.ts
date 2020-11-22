import { atom } from 'recoil';

export const cartItemsProductArrayAtom = atom({
    key: 'cartItemsProductArrayAtom',
    default: Array<string>()
});
