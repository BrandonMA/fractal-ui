import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Notification } from '../../models/Notification';
import { NotificationCell } from './NotificationCell';
import { FullScreen } from '../../../src/Layout/components';
import { SafeAreaFullScreenFlatList } from '../../../src/Layout/components/SafeAreaFullScreenFlatList';

const Container = styled(FullScreen)`
    background-color: #f2f2f2;
`;

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
        <Container>
            <SafeAreaFullScreenFlatList data={notifications} renderItem={renderItem} keyExtractor={keyExtractor} />
        </Container>
    );
}
