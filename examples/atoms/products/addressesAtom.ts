import { atom } from 'recoil';
import { mockAddresses } from '../../data';

export const addressesAtom = atom({
    key: 'addressesAtom',
    default: mockAddresses
});
