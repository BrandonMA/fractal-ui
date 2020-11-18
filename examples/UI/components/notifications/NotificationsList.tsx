import React, { useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { Notification } from '../../../BusinessLogic/models/Notification';
import { NotificationCell } from './NotificationCell';
import { SafeAreaFullScreenFlatList } from '../../../../src/Layout/components/SafeAreaFullScreenFlatList';
import { BackgroundView } from '../BackgroundView';

interface Props {
    notifications: Array<Notification>;
}

export function NotificationList(props: Props): JSX.Element {
    const { notifications } = props;
    const renderItem = useCallback(
        (value: SectionListRenderItemInfo<Notification>) => {
            const { item, index } = value;
            return <NotificationCell notification={item} lastItem={index === notifications.length - 1} />;
        },
        [notifications]
    );
    const keyExtractor = useCallback((_, index) => notifications[index].id, [notifications]);

    return (
        <BackgroundView>
            <SafeAreaFullScreenFlatList data={notifications} renderItem={renderItem} keyExtractor={keyExtractor} />
        </BackgroundView>
    );
}
