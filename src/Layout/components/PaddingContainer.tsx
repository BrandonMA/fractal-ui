import styled from 'styled-components/native';

interface PaddingContainerProps {
    isLastItem?: boolean;
}

export const PaddingContainer = styled.View`
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: ${(props: PaddingContainerProps) => (props.isLastItem ? '16px' : 0)};
`;
