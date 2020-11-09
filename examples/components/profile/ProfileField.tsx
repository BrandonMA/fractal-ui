import React from 'react';
import styled from 'styled-components/native';
import { TextField } from '../TextField';
import { TextInputProps } from 'react-native';

const Container = styled.View`
    flex-direction: column;
    margin-bottom: 12px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 8px;
`;

interface Props extends TextInputProps {
    title: string;
}

export function ProfileField(props: Props): JSX.Element {
    const { title, ...others } = props;
    return (
        <Container>
            <Title>{props.title}</Title>
            <TextField placeholder={props.title} {...others} />
        </Container>
    );
}
