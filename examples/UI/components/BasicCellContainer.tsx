import styled from 'styled-components/native';
import { getCursorStyle } from '../../../src/Layout/util';

interface ContainerProps {
    lastItem: boolean;
}

export const BasicCellContainer = styled.View`
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    margin: 12px 12px ${(props: ContainerProps) => (props.lastItem ? '12px' : 0)};
    ${getCursorStyle}
`;
