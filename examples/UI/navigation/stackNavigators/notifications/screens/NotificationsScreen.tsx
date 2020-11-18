import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { NotificationList } from '../../../../components/notifications/NotificationsList';
import { useNotifications } from '../../../../../BusinessLogic/hooks/notifications/useNotifications';

export function NotificationsScreen(): JSX.Element {
    const nofications = useNotifications();
    return (
        <StackScreenContent>
            <NotificationList notifications={nofications} />
        </StackScreenContent>
    );
}
