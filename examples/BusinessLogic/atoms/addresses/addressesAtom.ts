import { atom } from 'recoil';
import { mockAddresses } from '../../data/mockAddresses';

export const addressesAtom = atom({
    key: 'addressesAtom',
    default: mockAddresses
});
