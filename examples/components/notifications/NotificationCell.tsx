import React from 'react';
import styled from 'styled-components/native';
import { Notification } from '../../models/Notification';
import { Text } from 'react-native';

const Container = styled.View`
    background-color: white;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 12px;
`;

const Label = styled.Text`
    color: #999;
    margin-top: 12px;
    align-self: flex-end;
`;

interface Props {
    notification: Notification;
}

export function NotificationCell(props: Props): JSX.Element {
    return (
        <Container>
            <Text>{props.notification.text}</Text>
            <Label>{props.notification.date.toISOString().slice(0, 10)}</Label>
        </Container>
    );
}
