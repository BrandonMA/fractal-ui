import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';
import { Title } from '../Title';
import { BaseTextInput } from '../../../../src/Layout/components/BaseTextInput';

const Container = styled.View`
    flex-direction: column;
    margin-bottom: 12px;
`;

const StyledTitle = styled(Title)`
    margin-bottom: 4px;
`;

interface Props extends TextInputProps {
    title: string;
}

export function ProfileField(props: Props): JSX.Element {
    const { title, ...others } = props;
    return (
        <Container>
            <StyledTitle>{props.title}</StyledTitle>
            <BaseTextInput placeholder={props.title} {...others} />
        </Container>
    );
}
