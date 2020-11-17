import { atom } from 'recoil';
import { mockAddresses } from '../../data/mockAddresses';

export const currentAddressAtom = atom({
    key: 'currentAddressAtom',
    default: mockAddresses[0]
});
