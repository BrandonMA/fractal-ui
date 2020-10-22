import styled from 'styled-components/native';

interface SpacerProps {
    width: number;
    height: number;
}

export const Spacer = styled.View`
    width: ${(props: SpacerProps) => props.width};
    height: ${(props: SpacerProps) => props.height};
`;
