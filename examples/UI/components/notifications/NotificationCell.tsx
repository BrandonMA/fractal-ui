import React from 'react';
import styled from 'styled-components/native';
import { Notification } from '../../../BusinessLogic/models/Notification';
import { Text } from 'react-native';
import { Label } from '../Label';
import { BasicCellContainer } from '../BasicCellContainer';

const StyledLabel = styled(Label)`
    margin-top: 12px;
    align-self: flex-end;
`;

interface Props {
    notification: Notification;
    lastItem: boolean;
}

export function NotificationCell(props: Props): JSX.Element {
    return (
        <BasicCellContainer lastItem={props.lastItem}>
            <Text>{props.notification.text}</Text>
            <StyledLabel>{props.notification.date.toISOString().slice(0, 10)}</StyledLabel>
        </BasicCellContainer>
    );
}
