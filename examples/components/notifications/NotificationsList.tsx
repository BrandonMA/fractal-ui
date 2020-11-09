import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Notification } from '../../models/Notification';
import { NotificationCell } from './NotificationCell';

const Container = styled.FlatList`
    flex: 1;
    margin: 12px;
    border-radius: 8px;
`;

interface Props {
    notifications: Array<Notification>;
}

export function NotificationList(props: Props): JSX.Element {
    const { notifications } = props;
    const renderItem = useCallback((value: SectionListRenderItemInfo<Notification>) => {
        const { item } = value;
        return <NotificationCell notification={item} />;
    }, []);
    const keyExtractor = useCallback((_, index) => notifications[index].id, [notifications]);

    return <Container data={notifications} renderItem={renderItem} keyExtractor={keyExtractor} />;
}
