import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { NotificationList } from '../../../../components/notifications/NotificationsList';
import { mockNotifications } from '../../../../data';

export function NotificationsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <NotificationList notifications={mockNotifications} />
            </BackgroundView>
        </StackScreenContent>
    );
}
