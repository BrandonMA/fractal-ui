import { atom } from 'recoil';
import { mockNotifications } from '../../data/mockNotifications';

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: mockNotifications
});
