import { atom } from 'recoil';
import { mockAddresses } from '../../data';

export const currentAddressAtom = atom({
    key: 'currentAddressAtom',
    default: mockAddresses[0]
});
