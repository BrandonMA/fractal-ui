import React from 'react';
import styled from 'styled-components/native';
import { Notification } from '../../models/Notification';
import { Text } from 'react-native';

interface ContainerProps {
    lastItem: boolean;
}

const Container = styled.View`
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    margin: 12px 12px ${(props: ContainerProps) => (props.lastItem ? '12px' : 0)};
`;

const Label = styled.Text`
    color: #999;
    margin-top: 12px;
    align-self: flex-end;
`;

interface Props {
    notification: Notification;
    lastItem: boolean;
}

export function NotificationCell(props: Props): JSX.Element {
    return (
        <Container lastItem={props.lastItem}>
            <Text>{props.notification.text}</Text>
            <Label>{props.notification.date.toISOString().slice(0, 10)}</Label>
        </Container>
    );
}
