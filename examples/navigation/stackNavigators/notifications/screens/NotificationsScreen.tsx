import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { NotificationList } from '../../../../components/notifications/NotificationsList';
import { mockNotifications } from '../../../../data/mockNotifications';

export function NotificationsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <NotificationList notifications={mockNotifications} />
        </StackScreenContent>
    );
}
