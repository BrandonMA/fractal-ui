import { Notification } from '../models/Notification';

export const mockNotifications: Array<Notification> = [
    {
        id: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date()
    },
    {
        id: '2',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: new Date('Aug 9, 2020')
    }
];
