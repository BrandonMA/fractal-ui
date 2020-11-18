import { useRecoilValue } from 'recoil';
import { notificationsAtom } from '../../atoms/notifications/notificationsAtom';
import { Notification } from '../../models/Notification';

export function useNotifications(): Array<Notification> {
    return useRecoilValue(notificationsAtom);
}
